import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 150,
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 25,
    width: "100%",
  },
  infoContainerNameWeight: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
  },
  weight: {
    fontSize: 16,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
    opacity: 0.5,
  },
  price: {
    fontFamily: "Jakarta-Bold",
    fontSize: 18,
    color: theme.colors.text,
  },
});
