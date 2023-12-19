//import liraries
import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { RestaurantItem } from "../../components";
import restaurants from "../../../assets/data/restaurants.json";

// create a component
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

//make this component available to the app
export default HomeScreen;
