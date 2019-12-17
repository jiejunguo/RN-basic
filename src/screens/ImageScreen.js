import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Howard"
        imageSource={require("../../assets/howard.jpeg")}
      />
      <ImageDetail
        title="Jack"
        imageSource={require("../../assets/jack.jpeg")}
      />
      <ImageDetail
        title="Gloria"
        imageSource={require("../../assets/gloria.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ImageScreen;
