import React from "react";
import { StyleSheet, Text, View, TextInputProps } from "react-native";

interface MyViewComponentProps extends TextInputProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const CustomViewComponent: React.FC<MyViewComponentProps> = ({
  text,
  backgroundColor,
  textColor,
}) => {
  const dynamicStyles = {
    view: { backgroundColor: backgroundColor },
    text: { color: textColor },
  };
  return (
    <View style={[styles.view, dynamicStyles.view]}>
      <Text style={dynamicStyles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginRight: 10
    },
  });

export default CustomViewComponent;
