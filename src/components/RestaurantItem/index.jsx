import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };

  return (
    <Pressable style={styles?.restaurantContainer} onPress={onPress}>
      <Image
        source={{
          url: restaurant?.image,
        }}
        style={styles?.image}
      />

      <View style={styles.row}>
        <View>
          <Text style={styles?.title}>{restaurant?.name}</Text>
          <Text
            style={styles.subtitle}
          >{`$ ${restaurant.deliveryFee} . ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}</Text>
        </View>
        <View style={styles.ratings}>
          <Text style={styles.ratingText}>{restaurant.rating}</Text>
          <MaterialIcons name="star" size={18} color="green" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
  ratings: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default RestaurantItem;
