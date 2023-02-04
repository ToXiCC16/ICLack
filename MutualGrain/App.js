import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
