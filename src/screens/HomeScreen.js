import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Welcome!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Component"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
