import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import React, { useState, useEffect} from 'react';

const Search = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync();
//       setUserLocation(location);
//     })()
//   }, [])

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={{ height: "100%", width: "100%" }}
//         // coordinate={userLocation.coords}
//         region={{ latitude: {userLocation.coords.latitude},
//            longitude: {userLocation.coords.longitude},
//            latitudeDelta: 0.0922, 
//            longitudeDelta: 0.0421 }}
//       >
//         {userLocation && <Marker coordinate={userLocation.coords} />}
//       </MapView>

//       <StatusBar style="auto" />
//     </View>
//   );
};

// export default Search;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
