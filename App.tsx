import { View, StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </View>
  );
}
