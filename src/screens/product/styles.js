import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.colors.white,
  },
  description: {
    fontSize: 28,
    color: theme.colors.text,
    fontFamily: "Jakarta-Bold",
    width: "80%",
  },
  imgContainer: {
    position: "relative",
    width: 300,
    height: 300,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  img: { height: 300, width: 300, borderRadius: 50 / 1.618 },
  priceContainer: {
    position: "absolute",
    right: -20,
    bottom: -20,
    backgroundColor: theme.colors.primary,
    width: 150,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    flexDirection: "row",
  },
  price: {
    fontSize: 18,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
  },
  infoContainer: {
    backgroundColor: theme.colors.transparent,
    width: 150,
    height: 70,
    justifyContent: "center",
    // alignItems: "center",
    borderRadius: 100,
    paddingLeft: 30,
  },
  weight: {
    fontSize: 18,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
});
