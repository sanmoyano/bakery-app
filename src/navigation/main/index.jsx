import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../../constants";
import { Categories, Product, Products } from "../../screens";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTintColor: theme.colors.black,
        headerTitleStyle: {
          fontFamily: "Jakarta-Bold",
        },
      }}>
      <Stack.Screen options={{ headerShown: false }} name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
