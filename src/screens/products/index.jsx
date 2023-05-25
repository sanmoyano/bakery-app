import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import { styles } from "./styles";
import ProductItem from "../../components/productItem";
import { PRODUCTS } from "../../constants";

const Products = ({ navigation, route }) => {
  const { categoryId, color } = route.params;

  const filteredProducts = PRODUCTS?.filter((product) => product.category === categoryId);

  const onSelected = (item) => {
    navigation.navigate("Product", {
      productId: item.id,
      name: item.name,
      color,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem color={color} item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Products;
