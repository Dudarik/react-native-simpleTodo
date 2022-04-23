import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const Todo = ({ id, title, onDelete }) => {
  return (
    <TouchableOpacity
      // onPress={() => console.log(id)}
      onLongPress={() => onDelete(id)}>
      <View>
        <Text style={styles.todo}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    marginTop: 5,
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 3,
    color: "white",
  },
  hidden: {
    color: "red",
  },
});

export default Todo;
