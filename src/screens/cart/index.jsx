import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CartItem } from "../../components";
import { confirmOrder, removeFromCart } from "../../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);

  const isCartEmpty = cart.length === 0;

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const onConfirmOrder = () => {
    dispatch(confirmOrder({ cart, total }));
  };
  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={isCartEmpty}
          onPress={onConfirmOrder}
          style={styles.buttonConfirm}>
          <View style={isCartEmpty ? styles.disabled : styles.button}>
            <Text style={styles.confirmText}>Confirm</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
