import { StyleSheet } from "react-native";

import { theme } from "../../constants/theme/theme";

export const styles = StyleSheet.create({
  container: {
    felx: 1,
    backgroundColor: theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.41,

    elevation: 3,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  headerContainer: {},
  date: {
    fontSize: 16,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {},
  total: {},
});
