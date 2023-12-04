import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 6,
  },
  checkBox: {
    minWidth: 20,
    minHeight: 20,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 9999,
  },
  checkBoxChecked: {
    minWidth: 20,
    minHeight: 20,
    borderWidth: 2,
    borderColor: "#5E60CE",
    borderRadius: 9999,
    backgroundColor: "#5E60CE",
  },
  checkBoxText: {
    fontSize: 10,
    paddingLeft: 4,
    color: "#FFF",
  },
  description: {
    fontSize: 14,
    color: "#F2F2F2",
    flex: 1,
  },
  descriptionChecked: {
    fontSize: 14,
    color: "#F2F2F2",
    flex: 1,
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  trash: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    "&:onClick": {
      backgroundColor: "red",
    },
  },
});
