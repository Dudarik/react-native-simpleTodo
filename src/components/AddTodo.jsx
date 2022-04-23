import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const Addtodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handlerPress = () => {
    if (value) {
      onSubmit(value);
      setValue("");
      return;
    }
    Alert.alert("Название не может быть пустым");
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder='input text'
      />

      <Button title='Добавить' onPress={handlerPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#3949ab",
    borderRadius: 3,
    padding: 10,
    fontSize: 18,
    backgroundColor: "#5b6bcd",
    color: "white",
  },
});

export default Addtodo;
