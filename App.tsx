import { StyleSheet, View } from "react-native";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { useState } from "react";
import { AddTask } from "@/components/AddTask";

export default function App() {
  const [list, setList] = useState<Task[]>([]);

  const deleteHandler = (id: number) => {
    setList(list.filter((item) => item.id !== id));
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
