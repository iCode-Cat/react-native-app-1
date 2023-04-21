import { useContext } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { TodoContext } from "../context/todos";
import Todo from "./Todo";
import { StatusBar } from "expo-status-bar";

export default function Todos() {
  const [todoList, setTodoList] = useContext(TodoContext);
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => <Todo title={item.title} />}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
