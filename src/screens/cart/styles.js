import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  footerContainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonConfirm: {
    backgroundColor: theme.colors.transparent,
    borderRadius: 100,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmText: {
    color: theme.colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 18,
  },
  totalContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalText: {
    color: theme.colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 16,
  },
  totalPrice: {
    color: theme.colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 16,
  },
});
