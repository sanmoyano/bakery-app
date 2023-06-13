import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { theme } from "../../constants";
import { addTocCart } from "../../store/actions/cart.action";

const Product = ({ navigation, route }) => {
  const { color } = route.params;
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addTocCart(product));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.description}>{product.description}</Text>
        <View style={{ ...styles.imgContainer, backgroundColor: color }}>
          <Image style={styles.img} source={{ uri: product.img }} resizeMode="cover" />
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Jakarta-Bold",
                color: theme.colors.text,
                opacity: 0.5,
              }}>
              /kg
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.labelContainer}>
            <View style={styles.infoContainer}>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 14,
                  fontFamily: "Jakarta-Bold",
                  color: theme.colors.text,
                  opacity: 0.5,
                }}>
                Weight
              </Text>
              <Text style={styles.weight}>{product.weight}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 14,
                  fontFamily: "Jakarta-Bold",
                  color: theme.colors.text,
                  opacity: 0.5,
                }}>
                Shelf life
              </Text>
              <Text style={styles.weight}>1 month</Text>
            </View>
          </View>
          <View style={styles.labelContainer}>
            <View style={styles.infoContainer}>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 14,
                  fontFamily: "Jakarta-Bold",
                  color: theme.colors.text,
                  opacity: 0.5,
                }}>
                Calories(100g)
              </Text>
              <Text style={styles.weight}>510kcl</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 14,
                  fontFamily: "Jakarta-Bold",
                  color: theme.colors.text,
                  opacity: 0.5,
                }}>
                Sweetener
              </Text>
              <Text style={styles.weight}>Sugar</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={onAddToCart}
          style={{
            backgroundColor: theme.colors.text,
            borderRadius: 30,
            width: "100%",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ color: theme.colors.white, fontSize: 18, fontFamily: "Jakarta-Regular" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Product;
