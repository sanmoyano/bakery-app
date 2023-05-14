import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";

import { theme } from "./constants";
import { Categories } from "./screens/index";
import { styles } from "./styles";

export default function App() {
  const [loaded] = useFonts({
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.pr} />
      </View>
    );
  }
  return <Categories />;
}
