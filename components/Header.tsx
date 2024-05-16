import { StyleSheet, View, Text } from "react-native";

export function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Task list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 5,
    height: 80,
    width: "100%",
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "darkblue",
    fontWeight: "bold",
  },
});
