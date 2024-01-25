import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomButtonComponent from "../components/customComponents/CustomButtonComponent";

type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Registration"
>;

const BaseScreen = () => {
  const navigation = useNavigation<MyComponentNavigationProp>();
  const onRegister = () => {
    navigation.navigate("Registration");
  };

  return (
    <ImageBackground
      source={require("../../assets/backgroundImage.png")}
      style={styles.backgroundImage}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 116,
          fontWeight: "500",
          fontFamily: "Hiatus",
          letterSpacing: 5,
          marginTop: 30,
        }}
      >
        Aspen
      </Text>
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "600" }}>
          Plan your
        </Text>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "500" }}>
          Luxurious
        </Text>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "500" }}>
          Vacation
        </Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <CustomButtonComponent
          text="Explore"
          backgroundColor="#176FF2"
          textColor="white"
          onPress={onRegister}
          paddingHorizontal={30}
          paddingVertical={10}
          fontSize={20}
          marginLeft={50}
          marginRight={50}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 50,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});

export default BaseScreen;
