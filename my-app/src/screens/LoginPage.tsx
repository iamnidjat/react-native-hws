import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import MyInputComponent from "../components/customComponents/MyInputComponent";
import MyButtonComponent from "../components/customComponents/MyButtonComponent";
import StatusBarIcon from "../components/icons/StatusBarIcon";
import MyCheckBoxComponent from "../components/customComponents/MyCheckBoxComponent";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import XButtonIcon from "../components/icons/XButtonIcon";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const LoginPage = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const authContext = useAuth();

  const onLogin = async () => {
    if (emailInputValue.trim() !== "" && passwordInputValue.trim() !== "") {
      const token = "logging_example_token";

      await SecureStore.setItemAsync("authToken", token);

      authContext.onLogin(emailInputValue, passwordInputValue, token);

      Alert.alert("Success", "Logging in is successful!");
      setEmailInputValue("");
      setPasswordInputValue("");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newState: boolean) => {
    setIsChecked(newState);
  };

  const navigation = useNavigation<MyComponentNavigationProp>();

  const handlePress = () => {
    navigation.navigate("Registration");
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex items-center">
        <StatusBarIcon />
      </View>
      <View className="flex flex-row justify-between mb-7.5 mx-1.25">
        <XButtonIcon />
        <Text className="font-inter text-3xl non-italic font-semibold">Log In</Text>
        <Pressable onPress={handlePress}>
          <Text style={{ color: "#5DB075" }}>Sign Up</Text>
        </Pressable>
      </View>
      <MyInputComponent
        placeholder="Email"
        value={emailInputValue}
        myFunction={setEmailInputValue}
        secureTextEntry={false}
      ></MyInputComponent>
      <View className="flex flex-row items-center">
        <MyInputComponent
          style={{ flex: 1 }}
          placeholder="Password"
          value={passwordInputValue}
          myFunction={setPasswordInputValue}
          secureTextEntry={!showPassword}
        ></MyInputComponent>
        <Pressable onPress={toggleShowPassword}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </Pressable>
      </View>
      <MyButtonComponent title="Log in" onPress={onLogin} />
      <View className="flex justify-center items-center">
        <Text className="text-crayola">Forgot your password ?</Text>
      </View>
    </View>
  );
};


export default LoginPage;
