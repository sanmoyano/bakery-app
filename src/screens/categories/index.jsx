import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button
        title="Go Products"
        color={theme.colors.black}
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

export default Categories;
