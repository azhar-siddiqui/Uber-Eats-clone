import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Dish", { id: dish.id })}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    color: "gray",
    marginVertical: 8,
  },
  price: {
    fontSize: 17,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  },
});

export default DishListItem;
