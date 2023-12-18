import { StyleSheet } from "react-native";

export const gridStyles = StyleSheet.create({
  largerTexts: {
    fontSize: 64,
    lineHeight: 64,
    color: "#61b8d3",
  },
  mediumTexts: {
    fontSize: 24,
    lineHeight: 64,
  },
  turnStatus: {
    display: "flex",
    flexDirection: "row",
  },
  gridContainer: {
    backgroundColor: "#61b8d3",
    width: "75%",
    aspectRatio: "1/1",
    position: "relative",
    overflow: "hidden",
  },
  gridContainerInner: {
    width: "100%",
    height: "100%",
    transform: "scale(1.02)",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridRows: {
    flex: 1,
    gap: 5,
    width: "100%",
    height: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  gridCells: {
    flexGrow: 1,
    aspectRatio: "1/1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002f41",
    transform: "scaleY(1)",
  },
  largeTexts: {
    overflow: "visible",
    fontWeight: "300",
    color: "#61b8d3",
    fontSize: 90,
    lineHeight: 90,
  },
  winningCell: {
    backgroundColor: "",
  },
});
