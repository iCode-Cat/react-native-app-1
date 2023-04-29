import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Todos from "./components/Todos";
import { TodoContext } from "./context/todos";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [tempTodo, setTempTodo] = useState("");

  const addTodoHandler = () => {
    if (tempTodo.length === 0) return;
    setTodoList((prevTodo) => [
      ...prevTodo,
      { key: Math.random(), title: tempTodo },
    ]);
    // clear
    setTempTodo("");
  };

  const deleteOneItem = (key) => {
    const filteredItems = todoList.filter((todo) => todo.key !== key);
    setTodoList(filteredItems);
  };

  return (
    <TodoContext.Provider value={[todoList, setTodoList, deleteOneItem]}>
      <View style={styles.layout}>
        <View style={styles.controller}>
          <TextInput
            onChangeText={(text) => {
              setTempTodo(text);
            }}
            style={styles.input}
            value={tempTodo}
            placeholder="your todo"
          />
          <TouchableOpacity onPress={addTodoHandler} style={styles.button}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
        <Todos />
      </View>
    </TodoContext.Provider>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    width: "100%",
  },
  controller: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "purple",
    justifyContent: "center",
    width: 90,
    height: 40,
    padding: 5,
    color: "red",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
  },
  input: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
