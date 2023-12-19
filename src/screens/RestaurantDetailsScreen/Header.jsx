import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant?.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant?.name}</Text>
        <Text
          style={styles.subtitle}
        >{`$ ${restaurant?.deliveryFee} . ${restaurant?.minDeliveryTime}-${restaurant?.maxDeliveryTime} minutes`}</Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },

  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  menuTitle: {
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});

export default RestaurantHeader;
