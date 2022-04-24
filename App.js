import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AddTodo from "./src/components/AddTodo";
import Todolist from "./src/components/TodoList";
import TodoListSwipe from "./src/components/TodoListSwipe";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const key = Date.now();
    setTodos((p) => [{ key, text }, ...p]);
  };

  const deleteTodo = (key) => {
    setTodos((p) => p.filter((todo) => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <Header text='ToDo List' />
      <View style={styles.dataContainer}>
        <View>
          <AddTodo onSubmit={addTodo} />
          {/* <Todolist todos={todos} onDelete={deleteTodo} /> */}
        </View>

        <StatusBar style='auto' />
      </View>
      <TodoListSwipe todos={todos} onDelete={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  dataContainer: {
    padding: 10,
  },
});

// const styles = StyleSheet.create({
//   // constainer: {
//   //   padding: 10,
//   // },
// });
