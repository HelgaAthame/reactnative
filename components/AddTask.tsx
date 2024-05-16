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
      />
      <Button
        title={"ADD"}
        onPress={() => {
          add(text);
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
    backgroundColor: "azure",
    padding: 5,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
