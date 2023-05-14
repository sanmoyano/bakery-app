import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Product Detail"
        onPress={() => navigation.navigate("Product")}
        color={theme.colors.black}
      />
    </View>
  );
};

export default Products;
