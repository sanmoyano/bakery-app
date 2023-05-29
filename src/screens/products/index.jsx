import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import ProductItem from "../../components/productItem";
import { PRODUCTS } from "../../constants";

const Products = ({ navigation, route }) => {
  const category = useSelector((state) => state.categories.selected);

  const filteredProducts = PRODUCTS?.filter((product) => product.category === category.id);

  const onSelected = (item) => {
    navigation.navigate("Product", {
      productId: item.id,
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem color={category.color} item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Products;
