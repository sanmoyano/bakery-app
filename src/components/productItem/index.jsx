import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)} style={styles.touchableContainer}>
        <Text>IMAGEN</Text>
        <View style={styles.infoContainerNameWeight}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.weight}>{item.weight}</Text>
        </View>
        <Text style={styles.price}>{`$ ${item.price}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
