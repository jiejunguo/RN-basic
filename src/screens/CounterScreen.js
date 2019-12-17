import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CountScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.textStyle}>Current Counter = {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default CountScreen;
