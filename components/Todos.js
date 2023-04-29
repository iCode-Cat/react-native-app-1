import { useContext } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { TodoContext } from "../context/todos";
import Todo from "./Todo";
import { StatusBar } from "expo-status-bar";

export default function Todos() {
  const [todoList, setTodoList, deleteOneItem] = useContext(TodoContext);
  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={todoList}
          renderItem={({ item }) => (
            <Todo
              deleteOneItem={deleteOneItem}
              title={item.title}
              id={item.key}
            />
          )}
          keyExtractor={(item) => item.key}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  flatList: {
    display: "flex",
    gap: 10,
    padding: 20,
  },
  view: {
    width: "100%",
    height: "100%",
  },
});
