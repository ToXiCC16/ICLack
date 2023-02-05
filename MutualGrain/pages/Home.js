import React from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import ProfileList from "../components/ProfileList";
import { Ionicons } from '@expo/vector-icons';
import AppBar from "../components/AppBar";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

const Home = () => {
  return (
    <SafeAreaView style={{ marginTop: 0 }}>
      {/* <TouchableOpacity onPress={onSettingsPress} style = {styles.settingsView}>
        <Ionicons name="ios-settings" size={24} color="#fff" />
      </TouchableOpacity> */}
      <ProfileList></ProfileList>
    </SafeAreaView>
  );
};

const onSettingsPress = () => {
  console.log("settings pressed");
}

// const styles = StyleSheet.create({ 
//   settingsView: {
//     positon: 'absolute',
//     left: 305,
//     top : 590,
//     alignItems: "center",
//     flexDirection: 'row', 
//     padding: 10,
//     zIndex: 3
//   }
// });

export default Home;
