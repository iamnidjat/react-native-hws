import React from "react";
import { Pressable, Text, StyleSheet, TextInputProps } from "react-native";

interface MyButtonComponentProps extends TextInputProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  paddingHorizontal: number;
  paddingVertical: number;
  fontSize: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  onPress: () => void;
}

const CustomButtonComponent: React.FC<MyButtonComponentProps> = ({
  text,
  backgroundColor,
  textColor,
  paddingHorizontal,
  paddingVertical,
  fontSize,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  onPress,
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginTop: marginTop,
        borderRadius: 100,
        flex: 1
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: textColor,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          fontSize: fontSize,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButtonComponent;
