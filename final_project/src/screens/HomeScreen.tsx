import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import MyInputComponent from "../components/customComponents/CustomInputComponent";
import CustomInputComponent from "../components/customComponents/CustomInputComponent";
import StarIcon from "../components/icons/StarIcon";
import HeartIcon from "../components/icons/HeartIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

interface Item {
  id: string;
  name: string;
  score?: number;
  info?: string;
  pathToImage: keyof typeof images;
}

const images = {
  "1": require("../../assets/Rectangle 992 (1).png"),
  "2": require("../../assets/Rectangle 992 (2).png"),
  "3": require("../../assets/Rectangle 992.png"),
  "4": require("../../assets/Rectangle 994.png"),
} as Record<string, ImageSourcePropType>;

type RootStackParamList = {
  Home: undefined;
  Stack: undefined;
};

type MyComponentNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Stack"
>;

const HomeScreen = () => {
  const navigation = useNavigation<MyComponentNavigationProp>();
  const [selectedValue, setSelectedValue] = useState("");

  const popular: Item[] = [
    {
      id: "1",
      name: "Allay Palace",
      score: 4.1,
      pathToImage: "3",
    },
    {
      id: "2",
      name: "Coeurdes Alpes",
      score: 4.5,
      pathToImage: "4",
    },
  ];

  const recommended: Item[] = [
    {
      id: "1",
      name: "Explore Aspen",
      info: "4N/5D",
      pathToImage: "1",
    },
    {
      id: "2",
      name: "Luxurious Aspen",
      info: "2N/3D",
      pathToImage: "2",
    },
  ];

  const onBookNow = (
    // It is just a Typescript problem, but it works
    pathToImage: ImageSourcePropType,
    score: number,
    name: string
  ) => {
    navigation.navigate("Stack", {
      screen: "BookNow",
      params: { pathToImage, score, name },
    });
  };

  const renderPopular: ListRenderItem<Item> = ({ item }) => (
    <TouchableOpacity
      style={{ marginRight: 40 }}
      onPress={() =>
        onBookNow(images[item.pathToImage], item.score!, item.name)
      }
    >
      <View>
        <Image source={images[item.pathToImage]} style={styles.imagePopular} />
      </View>
      <View style={styles.subContainer1}>
        <View
          style={{
            marginBottom: 20,
            backgroundColor: "#4D5652",
            maxWidth: 120,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 5,
            padding: 2,
          }}
        >
          <Text style={{ color: "white" }}>{item.name}</Text>
        </View>
        <View style={styles.subContainer2}>
          <View style={styles.subContainer3}>
            <StarIcon />
            <Text>{item.score}</Text>
          </View>
          {/* <View>
            <HeartIcon />
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderRecommended: ListRenderItem<Item> = ({ item }) => (
    <TouchableOpacity style={{ marginRight: 40 }}>
      <View style={{ marginBottom: 10 }}>
        <Image
          source={images[item.pathToImage]}
          style={styles.imageRecommended}
        />
      </View>
      <View
        style={{
          marginBottom: 20,
          backgroundColor: "#4D5652",
          maxWidth: 60,
          borderRadius: 30,
        }}
      >
        <Text style={{ color: "white" }}>{item.info}</Text>
      </View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.firstContainer}>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Explore</Text>
        <Picker
          style={{ padding: 5 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue: any, itemIndex: any) =>
            setSelectedValue(itemValue)
          }
        >
          <Picker.Item label="📍 Aspen, USA" value="defaultValue" />
          <Picker.Item label="📍 Arizona, USA" value="option1" />
          <Picker.Item label="📍 Atlanta, USA" value="option2" />
          <Picker.Item label="📍 NYC, USA" value="option3" />
        </Picker>
      </View>
      <Text style={{ fontSize: 30, fontWeight: "500", marginLeft: 10 }}>
        ASPEN
      </Text>
      <View>
        <TextInput
          style={{
            backgroundColor: "#F3F8FE",
            borderStyle: "solid",
            borderColor: "#F3F8FE",
            borderWidth: 1,
            borderRadius: 100,
            margin: 10,
            padding: 10,
          }}
          placeholder="Find things to do"
          placeholderTextColor="#B8B8B8"
        />
      </View>
      <View style={styles.inputsContainer}>
        <ScrollView horizontal>
          <CustomInputComponent value="Location" handleField={() => {}} />
          <CustomInputComponent value="Hotels" handleField={() => {}} />
          <CustomInputComponent value="Food" handleField={() => {}} />
          <CustomInputComponent value="Adventure" handleField={() => {}} />
          <CustomInputComponent value="Something else" handleField={() => {}} />
        </ScrollView>
      </View>
      <View style={styles.firstContainer}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Popular</Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#176FF2" }}>
          See all
        </Text>
      </View>
      <View style={styles.popular}>
        <FlatList
          horizontal
          style={{ width: "100%" }}
          data={popular}
          renderItem={renderPopular}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginBottom: 30,
          marginHorizontal: 20,
        }}
      >
        Recommended
      </Text>
      <View style={styles.popular}>
        <FlatList
          horizontal
          style={{ width: "100%" }}
          data={recommended}
          renderItem={renderRecommended}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginLeft: 20,
  },
  inputsContainer: {
    flexDirection: "row",
  },
  popular: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  imagePopular: {
    width: 180,
    height: 250,
    resizeMode: "cover",
    borderRadius: 20,
  },
  imageRecommended: {
    width: 180,
    height: 120,
    resizeMode: "cover",
    borderRadius: 20,
  },
  subContainer1: {
    flexDirection: "column",
    marginTop: -80,
  },
  subContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 100,
  },
  subContainer3: {
    flexDirection: "row",
    backgroundColor: "#4D5652",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});

export default HomeScreen;
