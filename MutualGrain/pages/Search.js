import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MapView 
         style = {{height : '100%', width : '100%'}}
         coordinate = {Location.getLastKnownPositionAsync}
         region = {{latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}/>
        
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
