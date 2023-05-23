import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontFamily: "Jakarta-Bold",
    fontSize: 20,
    paddingVertical: 20,
  },
});
