import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  FlatList,
  ListRenderItem,
  ImageSourcePropType,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomButtonComponent from "../components/customComponents/CustomButtonComponent";
import HeartIcon from "../components/icons/HeartIcon";
import CustomViewComponent from "../components/customComponents/CustomViewComponent";
import VegetableIcon from "../components/icons/VegatableIcon";
import CustomInputComponent from "../components/customComponents/CustomInputComponent";
import WhiteCartIcon from "../components/icons/WhiteCartIcon";

interface Item {
  id: string;
  name: string;
  price: string;
  measure: string;
  pathToImage: keyof typeof images;
}

const images = {
  "1": require("../../assets/Media (1).png"),
  "2": require("../../assets/Media.png"),
  "3": require("../../assets/Media (2).png"),
} as Record<string, ImageSourcePropType>;

const VegetablesScreen = () => {
  const addToCart = () => {
    Alert.alert(
      "Alert Title",
      "Product added to your cart.",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  const addToFavourites = () => {
    Alert.alert(
      "Alert Title",
      "Product added to your favourites.",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  const data: Item[] = [
    {
      id: "1",
      name: "Bottom Lettuce",
      price: "1.10",
      measure: "piece",
      pathToImage: "2",
    },
    {
      id: "1",
      name: "Purple Cauliflower",
      price: "1.85",
      measure: "kg",
      pathToImage: "1",
    },
    {
      id: "1",
      name: "Savoy Cabbage",
      price: "1.45",
      measure: "kg",
      pathToImage: "3",
    },
  ];

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <View style={styles.section}>
      <View>
        <Image source={images[item.pathToImage]} style={styles.image} />
      </View>
      <View style={styles.infoSection}>
        <View>
          <Text style={styles.mainText}>{item.name}</Text>
          <View style={styles.priceTextSection}>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.priceText2}> € / {item.measure}</Text>
          </View>
        </View>
        <View style={styles.buttonsSection}>
          <CustomButtonComponent
            onPress={addToFavourites}
            svgComponent={<HeartIcon />}
            backgroundColor="#fff"
          />
          <CustomButtonComponent
            onPress={addToCart}
            svgComponent={<WhiteCartIcon />}
            backgroundColor="#0BCE83"
          />
        </View>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Vegetables</Text>
          <VegetableIcon />
        </View>
        <CustomInputComponent placeholder="Search..." />
        <ScrollView horizontal style={styles.scrollContainer}>
          <CustomViewComponent
            text="✓ Cabbage and Lettuce (14)"
            backgroundColor="#E2CBFF"
            textColor="#6C0EE4"
          />
          <CustomViewComponent
            text="Cucumbers and tomatoes (10)"
            backgroundColor="#fff"
            textColor="#9586A8"
          />
        </ScrollView>
        <ScrollView horizontal style={styles.scrollContainer}>
          <CustomViewComponent
            text="Onions and garlic (8)"
            backgroundColor="#fff"
            textColor="#9586A8"
          />
          <CustomViewComponent
            text="Peppers (7)"
            backgroundColor="#fff"
            textColor="#9586A8"
          />
          <CustomViewComponent
            text="Potatoes (9)"
            backgroundColor="#fff"
            textColor="#9586A8"
          />
        </ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F5F5",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  scrollContainer: {
    marginBottom: 40,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  buttonsSection: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoSection: {
    display: "flex",
    justifyContent: "flex-start",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 30,
  },
  priceText2: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 30,
  },
  priceTextSection: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#2D0C57",
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 100,
  },
});

export default VegetablesScreen;
