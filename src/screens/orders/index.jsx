import React from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import OrderItem from "../../components/orderItem";
import { ORDERS } from "../../constants";

const Orders = () => {
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={ORDERS} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  );
};

export default Orders;
