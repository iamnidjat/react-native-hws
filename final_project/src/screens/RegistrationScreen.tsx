import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import CustomInputComponent from "../components/customComponents/CustomInputComponent";
import CustomButtonComponent from "../components/customComponents/CustomButtonComponent";
import { useNavigation } from "@react-navigation/native";
import XButtonIcon from "../components/icons/XButtonIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "../contexts/AuthContext";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const authContext = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async () => {
    if (
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password.trim() === confirmPassword.trim()
    ) {
      const token = "registration_example_token";

      await SecureStore.setItemAsync("authToken", token);

      authContext.onRegister(email, password, token);

      Alert.alert("Success", "Registration is successful!");
      console.log("Registration details:", { email, password });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  const navigation = useNavigation<MyComponentNavigationProp>();
  const onLogin = () => {
    navigation.navigate("Login");
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
        <Text>Sign Up</Text>
        <Pressable onPress={onLogin}>
          <Text style={{ color: "#5DB075" }}>Login</Text>
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
          secureTextEntry={!showPassword}
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
        <CustomInputComponent
          style={{ flex: 1 }}
          placeholder="Confirm password"
          value={confirmPassword}
          handleField={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        ></CustomInputComponent>
        <Pressable onPress={toggleConfirmPasswordVisibility}>
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </Pressable>
      </View>
      <View>
        <CustomButtonComponent
          text="Sign Up"
          backgroundColor="#176FF2"
          textColor="white"
          paddingHorizontal={30}
          paddingVertical={10}
          fontSize={20}
          onPress={handleRegister}
          marginLeft={20}
          marginRight={20}
        />
      </View>
    </View>
  );
};

export default RegistrationPage;
