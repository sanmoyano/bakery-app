import { StyleSheet } from "react-native";

import { theme } from "../../constants/theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
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
  header: {
    fontSize: 16,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: "Jakarta-Regular",
    color: theme.colors.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
    marginBottom: 5,
  },
});
