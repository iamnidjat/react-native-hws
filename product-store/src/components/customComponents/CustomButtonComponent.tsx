import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  Pressable,
} from "react-native";
import { Svg, Path, SvgProps } from "react-native-svg";

type SvgComponentProps = SvgProps & {};

interface MyButtonComponentProps extends TextInputProps {
  backgroundColor: string;
  svgComponent: React.ReactElement<SvgComponentProps>;
  onPress: () => void;
}

const CustomButtonComponent: React.FC<MyButtonComponentProps> = ({
  backgroundColor,
  svgComponent,
  onPress,
}) => {
  const dynamicStyles = { backgroundColor: backgroundColor };

  return (
    <Pressable style={[styles.button, dynamicStyles]} onPress={onPress}>
      {svgComponent}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10
  },
});

export default CustomButtonComponent;
