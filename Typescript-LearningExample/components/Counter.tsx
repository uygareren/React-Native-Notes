import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  startValue: number;
  incrementValue: number;
}

const Counter: React.FC<Props> = ({ startValue, incrementValue }) => {
  const [count, setCount] = useState(startValue);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + incrementValue);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - incrementValue);
  };

  return (
    <View style={styles.counter_container}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button_view}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement} style={styles.button_view}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counter_container: {
    width: 300,
    height: 300,
    backgroundColor: "#f2e4ce",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
  button_view: {
    height: 40,
    width: 150,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default Counter;
