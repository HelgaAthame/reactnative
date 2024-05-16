import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

interface Props {
  add: (val: string) => void;
}

export function AddTask({ add }: Props) {
  const [text, onChangeText] = useState("");
  const clear = () => onChangeText("");
  return (
    <View style={styles.main}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
        placeholder="New Task ..."
      />
      <Button
        title={"ADD"}
        color="green"
        onPress={() => {
          if (text.trim() !== "") add(text);
          clear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    padding: 5,
    borderColor: "gray",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
