import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { BasketDishItem } from "../../components";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItem}>Your Item</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem BasketDishItem={item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.separator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
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
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  yourItem: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 19,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
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

export default Basket;
