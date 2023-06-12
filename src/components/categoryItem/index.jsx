import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image resizeMode="cover" source={{ uri: item.img }} style={styles.img} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
