import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSelector } from "react-redux";

import { theme } from "../../constants";
import CartNavigator from "../cart";
import OrdersNavigator from "../orders";
import ShopNavigator from "../shop";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  const cart = useSelector((state) => state.cart.data);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          height: 90,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontFamily: "Jakarta-Bold",
          fontSize: 16,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.white,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons size={size} color={color} name={focused ? "home" : "home-outline"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              size={size}
              color={color}
              name={focused ? "file-tray" : "file-tray-outline"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons size={size} color={color} name={focused ? "cart" : "cart-outline"} />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.four,
            fontFamily: "Jakarta-Bold",
            fontSize: 14,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
