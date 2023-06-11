import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: "Jakarta-Regular",
    paddingVertical: 5,
    color: theme.colors.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: "Jakarta_Regular",
    paddingVertical: 5,
    color: theme.colors.text,
  },
});
