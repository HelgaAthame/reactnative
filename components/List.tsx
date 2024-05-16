import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";

interface Props {
  list: Task[];
  deleteHandler: (id: number) => void;
}

export function List({ list, deleteHandler }: Props) {
  return (
    <View style={styles.main}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => deleteHandler(item.id)}
          >
            <Text style={styles.text}>{item.text}</Text>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, backgroundColor: "transparent" }} />
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
  wrapper: {
    backgroundColor: "showwhite",
    padding: 5,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text: {
    fontSize: 16,
    color: "darkslateblue",
    fontWeight: "bold",
  },
});
