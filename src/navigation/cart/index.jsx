import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { theme } from "../../constants";
import { Cart } from "../../screens";
const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
          headerTintColor: theme.colors.black,
          headerTitleStyle: {
            fontFamily: "Jakarta-Bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
