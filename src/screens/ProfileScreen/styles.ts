import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: { width: 180, height: 180, borderRadius: 100 },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
  },
  nickname: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
});
