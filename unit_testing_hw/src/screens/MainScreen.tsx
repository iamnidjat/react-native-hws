import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButtonComponent from "../components/customComponents/CustomButtonComponent";

const MainScreen = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState("");

  const increment = () => {
    setState("Increment button clicked");
    setCount(count + 1);
  };

  const decrement = () => {
    setState("Decrement button clicked");
    setCount(count - 1);
  };

  return (
    <View testID="mainView" style={styles.container}>
      <Text testID="mainTextView" style={styles.counterText}>
        {count}
      </Text>
      <Text testID="mainTextView2" style={styles.counterText}>
        {state}
      </Text>
      <View testID="buttonsView" style={styles.buttonContainer}>
        <CustomButtonComponent
          testID="incrementButton"
          title="Increment"
          onPress={increment}
        />
        <CustomButtonComponent
          testID="decrementButton"
          title="Decrement"
          onPress={decrement}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: "row",
    marginTop: 20,
    justifyContent: 'space-between',
    width: '80%', 
  },
});

export default MainScreen;
