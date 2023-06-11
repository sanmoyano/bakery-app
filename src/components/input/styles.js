import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 14,
    color: theme.colors.text,
    borderBottomColor: theme.colors.four,
    borderBottomWidth: 1,
    marginBottom: 5,
    width: "90%",
    fontFamily: "Jakarta-Regular",
  },
  errorContainer: {},
  errorMessage: {
    fontSize: 12,
    fontFamily: "Jakarta-Regular",
    paddingVertical: 5,
    color: "red",
  },
});
