import { StyleSheet, StatusBar } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontFamily: "Jakarta-Bold",
    fontSize: 20,
    paddingVertical: 20,
  },
});
