import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { PRODUCTS, theme } from "../../constants";

const Product = ({ route }) => {
  const { productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: product.img }} resizeMode="cover" />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.weight}>{product.weight}</Text>
      </View>
    </View>
  );
};

export default Product;
