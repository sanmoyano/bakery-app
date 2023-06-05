import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import AuthNavigator from "./auth";
import TabNavigator from "./tabs";

const Navigation = () => {
  const [userId, setUserId] = useState(null);
  return <NavigationContainer>{userId ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default Navigation;
