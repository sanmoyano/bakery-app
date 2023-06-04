import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { addTocCart } from "../../store/actions/cart.action";

const Product = ({ route }) => {
  const { color } = route.params;
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addTocCart(product));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{product.description}</Text>
      <View style={{ ...styles.imgContainer, backgroundColor: color }}>
        <Image style={styles.img} source={{ uri: product.img }} resizeMode="cover" />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.weight}>{product.weight}</Text>
      </View>
      <Button title="Add to cart" onPress={onAddToCart} />
    </View>
  );
};

export default Product;
