import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Portal, PortalHost } from "@gorhom/portal";
import { FontAwesome } from "@expo/vector-icons";

const BasicComponent = () => {
  return (
    <Portal>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "red",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <FontAwesome name="play" size={30} style={{}} />
      </View>
    </Portal>
  );
};

export default BasicComponent;
