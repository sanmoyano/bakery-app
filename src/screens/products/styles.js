import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontFamily: "Jakarta-Bold",
    fontSize: 20,
    paddingVertical: 20,
  },
});
