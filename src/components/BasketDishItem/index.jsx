import { StyleSheet, Text, View } from "react-native";

const BasketDishItem = ({ BasketDishItem }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600", fontSize: 18 }}>
        {BasketDishItem.name}
      </Text>
      <Text style={{ marginLeft: "auto" }}>$ {BasketDishItem.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 10,
  },
});

export default BasketDishItem;
