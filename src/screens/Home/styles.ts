import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "black",
    minHeight: 173,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  form: {
    position: "absolute",
    gap: 4,
    flexDirection: "row",
    top: 147,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    minHeight: 52,
    minWidth: 271,
    maxWidth: 271,
    borderRadius: 6,
    backgroundColor: "#262626",
    paddingHorizontal: 16,
    color: "#808080",
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    backgroundColor: "#1A1A1A",
    padding: 24,
    paddingTop: 55,
    gap: 20,
    flex: 1,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  listHeaderTextCriadas: {
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  listHeaderTextConcluidas: {
    fontWeight: "bold",
    color: "#8284FA",
  },
  listHeaderNumber: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    backgroundColor: "#333333",
    color: "#D9D9D9",
    borderRadius: 999999,
    textAlign: "center",
  },
  listPopulated: {
    gap: 8,
  },

  listEmpty: {
    borderTopWidth: 2,
    borderTopColor: "#333333",
    paddingHorizontal: 20,
    paddingTop: 48,
    alignItems: "center",
  },
  listEmptyText1: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
  },
  listEmptyText2: {
    fontSize: 14,
    color: "#808080",
  },
});
