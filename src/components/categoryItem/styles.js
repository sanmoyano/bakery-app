import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    width: 300,
    borderRadius: 40,
    margin: 20,
  },
  containerTouchable: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    borderRadius: 40,
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.41,

    elevation: 3,
    position: "relative",
    overflow: "hidden",
  },
  name: {
    fontSize: 40,
    fontFamily: "Jakarta-Bold",
    color: theme.colors.text,
    paddingHorizontal: 20,
    lineHeight: 40,
    paddingVertical: 20,
  },
  imgContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -100,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 14 / 1.618,
  },
});
