import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./style";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)} style={styles.touchableContainer}>
        <View style={styles.imgContainer}>
          <Image resizeMode="cover" source={{ uri: item.img }} style={styles.img} />
        </View>
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
