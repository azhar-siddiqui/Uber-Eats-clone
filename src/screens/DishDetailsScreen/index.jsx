import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import restaurants from "../../../assets/data/restaurants.json";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const handleIncQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={handleDecQuantity}
          disabled={quantity < 1 && true}
        >
          <AntDesign name="minuscircleo" size={60} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncQuantity}>
          <AntDesign name="pluscircleo" size={60} color="black" />
        </TouchableOpacity>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Basket");
        }}
      >
        <Text style={styles.buttonText}>
          Add {quantity} items to cart {getTotal()} $
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    textTransform: "capitalize",
  },
});

export default DishDetailsScreen;
