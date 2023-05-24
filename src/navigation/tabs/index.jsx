import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { theme } from "../../constants";
import CartNavigator from "../cart";
import OrdersNavigator from "../orders";
import ShopNavigator from "../shop";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Jakarta-Bold",
          fontSize: 16,
        },
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.transparent,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Shop",
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{ tabBarLabel: "Orders" }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{ tabBarLabel: "Cart" }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
