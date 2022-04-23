import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Todo from "./Todo";

const Todolist = ({ todos, onDelete }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {todos.map((todo) => {
        // console.log("Todos", todo);
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onDelete={onDelete}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#8e9eff",
    marginTop: 10,
    height: "81%",
  },
});

export default Todolist;
