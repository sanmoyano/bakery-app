import React, { useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import ProductItem from "../../components/productItem";
import { filterProducts, selectProduct } from "../../store/actions";

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Product", {
      name: item.name,
      color: category.color,
    });
  };

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

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
