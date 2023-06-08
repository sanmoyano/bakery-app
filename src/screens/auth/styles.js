import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.four,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.41,

    elevation: 3,
  },
  title: {
    fontFamily: "Jakarta-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Jakarta-Regular",
    paddingVertical: 8,
  },
  input: {
    height: 45,
    borderBottomColor: theme.colors.four,
    borderBottomWidth: 1,
    marginBottom: 5,
    width: "90%",
    fontFamily: "Jakarta-Regular",
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  link: {
    paddingVertical: 5,
    borderBottomColor: "#0582ca",
    borderBottomWidth: 1,
  },
  linkText: {
    fontSize: 14,
    fontFamily: "Jakarta-Regular",
    color: "#0582ca",
    textAlign: "center",
  },
  submit: { paddingVertical: 5 },
});
