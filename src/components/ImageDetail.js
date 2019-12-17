import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = props => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});

export default ImageDetail;
