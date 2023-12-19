import React from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DishListItem } from "../../components";
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantHeader from "./Header";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
        onPress={() => {
          navigation.goBack();
        }}
        name="arrow-back-circle"
        size={50}
        color="white"
        style={styles.iconContainer}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: 10,
  },
});

export default RestaurantDetailsScreen;
