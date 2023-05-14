import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail</Text>
      <Button
        title="Back Categories"
        color={theme.colors.black}
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

export default Product;
