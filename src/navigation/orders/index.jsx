import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { theme } from "../../constants";
import { Orders } from "../../screens";
const Stack = createStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
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

export default OrdersNavigator;
