import { FlatList, Image, StatusBar, Text, View } from "react-native";
import styles from "./style";
import orders from "../../../assets/data/orders.json";
import restaurant from "../../../assets/data/restaurants.json";
import { BasketDishItem } from "../../components";
const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant?.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{order.Restaurant?.name}</Text>
        <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
        <Text style={styles.menuTitle}>Your Order</Text>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurant[0].dishes}
      renderItem={({ item }) => <BasketDishItem BasketDishItem={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OrderDetails;
