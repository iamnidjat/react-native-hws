import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageSourcePropType,
  ListRenderItem,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButtonComponent from "../components/customComponents/CustomButtonComponent";
import WifiICon from "../components/icons/WifiIcon";
import DinnerIcon from "../components/icons/DinnerIcon";
import TubIcon from "../components/icons/TubIcon";
import PoolIcon from "../components/icons/PoolIcon";
import StarIcon from "../components/icons/StarIcon";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import HeartIcon from "../components/icons/HeartIcon";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const BookNowScreen = () => {
  const navigation = useNavigation<MyComponentNavigationProp>();
  const route = useRoute();
  const pathToImage = route.params?.pathToImage; // It is just a Typescript problem, but it works
  const score = route.params?.score; // It is just a Typescript problem, but it works
  const name = route.params?.name; // It is just a Typescript problem, but it works

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.photoContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <BackButtonIcon />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={pathToImage} style={styles.image} />
        </View>
        {/* <HeartIcon /> */}
      </View>
      <View style={styles.subContainer1}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>{name}</Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#176FF2" }}>
          Show map
        </Text>
      </View>
      <View style={styles.subContainer2}>
        <StarIcon />
        <Text>{score}</Text>
        <Text>(355 Reviews)</Text>
      </View>
      <Text style={{ marginBottom: 5, marginHorizontal: 10 }}>
        Aspen is as close as one can get to a storybook alpine town in America.
        The choose-your-own-adventure possibilities—skiing, hiking, dining
        shopping and ....
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: "#176FF2",
          marginBottom: 20,
          marginHorizontal: 10,
        }}
      >
        Read more
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 10,
          marginHorizontal: 10,
        }}
      >
        Facilities
      </Text>
      <View style={styles.facilities}>
        <WifiICon />
        <DinnerIcon />
        <TubIcon />
        <PoolIcon />
      </View>
      <View style={styles.subContainer3}>
        <View style={styles.priceContainer}>
          <Text>Price</Text>
          <Text style={styles.price}>$199</Text>
        </View>
        <CustomButtonComponent
          text="Book Now ->"
          backgroundColor="#176FF2"
          textColor="white"
          onPress={() => {
            Alert.alert(
              "Alert Title",
              "This is the alert message.",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                },
              ],
              { cancelable: false }
            );
          }}
          paddingHorizontal={30}
          paddingVertical={10}
          fontSize={20}
          marginLeft={20}
          marginRight={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {},
  facilities: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  subContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  subContainer2: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  subContainer3: {
    flexDirection: "row",
    marginTop: 10,
  },
  price: {
    color: "#2DD7A4",
    fontWeight: "700",
    fontSize: 24,
  },
  priceContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 350,
    resizeMode: "cover",
    borderRadius: 20,
  },
});

export default BookNowScreen;
