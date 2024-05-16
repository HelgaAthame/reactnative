import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";

interface Props {
  list: Task[];
}

export function List({ list }: Props) {
  return (
    <View style={styles.main}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <TouchableHighlight>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    width: "100%",
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: "darkblue",
  },
});
