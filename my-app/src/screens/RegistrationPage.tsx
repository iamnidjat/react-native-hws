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
  Login: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const RegistrationPage = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const authContext = useAuth();

  const onRegister = async () => {
    if (
      nameInputValue.trim() !== "" &&
      emailInputValue.trim() !== "" &&
      passwordInputValue.trim() !== ""
    ) {
      const token = "registration_example_token";

      await SecureStore.setItemAsync("authToken", token);

      authContext.onRegister(
        nameInputValue,
        emailInputValue,
        passwordInputValue,
        token
      );

      Alert.alert("Success", "Registration is successful!");
      setNameInputValue("");
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
    navigation.navigate("Login");
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <StatusBarIcon />
      </View>
      <View style={styles.subContainer}>
        <XButtonIcon />
        <Text style={styles.pageHeader}>Sign Up</Text>
        <Pressable onPress={handlePress}>
          <Text style={{ color: "#5DB075" }}>Login</Text>
        </Pressable>
      </View>
      <MyInputComponent
        placeholder="Name"
        value={nameInputValue}
        myFunction={setNameInputValue}
        secureTextEntry={false}
      ></MyInputComponent>
      <MyInputComponent
        placeholder="Email"
        value={emailInputValue}
        myFunction={setEmailInputValue}
        secureTextEntry={false}
      ></MyInputComponent>
      <View style={styles.showHideContainer}>
        <MyInputComponent
          style={{ flex: 1 }}
          placeholder="Password"
          value={passwordInputValue}
          myFunction={setPasswordInputValue}
          secureTextEntry={!showPassword}
        ></MyInputComponent>
        <Pressable
          onPress={toggleShowPassword}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </Pressable>
      </View>
      <View style={styles.checkBoxContainer}>
        <MyCheckBoxComponent
          label="I would like to receive your newsletter and other promotional information."
          onChange={handleCheckboxChange}
        />
        <Text>
          {isChecked ? "Checkbox is checked" : "Checkbox is not checked"}
        </Text>
      </View>
      <MyButtonComponent title="Sign Up" onPress={onRegister} />
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.text}>Forgot your password ?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  forgotPasswordContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#5DB075",
  },
  pageHeader: {
    fontFamily: "Inter",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "600",
  },
  checkBoxContainer: {
    marginLeft: 10,
  },
  showHideContainer: {
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
  },
});

export default RegistrationPage;
