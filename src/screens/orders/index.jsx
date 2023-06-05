import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import OrderItem from "../../components/orderItem";
import { deleteOrder, getOrders } from "../../store/actions/order.action";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);
  const onRemove = (id) => {
    dispatch(deleteOrder(id));
  };
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <FlatList data={orders} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  );
};

export default Orders;
