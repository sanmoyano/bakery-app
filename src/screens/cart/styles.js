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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonConfirm: {
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
    fontSize: 20,
    textAlign: "center",
  },
  totalContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  totalText: {
    color: theme.colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  totalPrice: {
    color: theme.colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 48,
  },
  button: {
    backgroundColor: theme.colors.white,
    height: 100,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  disabled: {
    backgroundColor: theme.colors.black,
    opacity: 0.5,
    height: 100,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
