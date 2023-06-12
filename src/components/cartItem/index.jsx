import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants/theme/theme";

const CartItem = ({ item, onRemove, color }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.imgContainer }}>
        <Image resizeMode="cover" source={{ uri: item.img }} style={styles.img} />
      </View>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{item.name}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.content}>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Ionicons name="trash" size={22} color={theme.colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
