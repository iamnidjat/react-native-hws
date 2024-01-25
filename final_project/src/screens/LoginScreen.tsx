import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomInputComponent from "../components/customComponents/CustomInputComponent";
import CustomButtonComponent from "../components/customComponents/CustomButtonComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import XButtonIcon from "../components/icons/XButtonIcon";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "../contexts/AuthContext";
import { StatusBar } from "expo-status-bar";

type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Registration"
>;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const authContext = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email.trim() !== "" && password.trim() !== "") {
      const token = "logging_example_token";

      await SecureStore.setItemAsync("authToken", token);

      authContext.onLogin(email, password, token);

      Alert.alert("Success", "Logging in is successful!");

      console.log("Login details:", { email, password });
      setEmail("");
      setPassword("");
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  const navigation = useNavigation<MyComponentNavigationProp>();
  const onRegister = () => {
    navigation.navigate("Registration");
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <XButtonIcon />
        <Text>Sign In</Text>
        <Pressable onPress={onRegister}>
          <Text style={{ color: "#5DB075" }}>Register</Text>
        </Pressable>
      </View>
      <CustomInputComponent
        placeholder="Email"
        value={email}
        handleField={setEmail}
        secureTextEntry={false}
      ></CustomInputComponent>
      <View>
        <CustomInputComponent
          placeholder="Password"
          value={password}
          handleField={setPassword}
          secureTextEntry={false}
        ></CustomInputComponent>
        <Pressable onPress={togglePasswordVisibility}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </Pressable>
      </View>
      <View>
        <CustomButtonComponent
          text="Sign In"
          backgroundColor="#176FF2"
          textColor="white"
          paddingHorizontal={30}
          paddingVertical={10}
          fontSize={20}
          onPress={handleLogin}
          marginLeft={20}
          marginRight={20}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "#176FF2" }}>Forgot your password ?</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
