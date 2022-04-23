import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "./Navbar";

const Header = ({ title }) => {
  return (
    <View>
      <Navbar title={title} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
