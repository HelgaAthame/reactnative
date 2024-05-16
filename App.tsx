import { StyleSheet, View } from "react-native";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { useState } from "react";
import { AddTask } from "@/components/AddTask";

export default function App() {
  const [list, setList] = useState<Task[]>([]);

  const deleteHandler = (id: number) => {
    const newList = list.slice(0);
    newList.splice(id, 1);
    setList(newList);
  };

  return (
    <View style={styles.app}>
      <Header />
      <List list={list} deleteHandler={deleteHandler} />
      <AddTask
        add={(val) => {
          const task = {
            id: list.length,
            text: val,
          };
          setList([...list, task]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    width: "100%",
  },
});
