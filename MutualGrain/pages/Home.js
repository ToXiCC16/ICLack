import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProfileList from "../components/ProfileList";
import AppBar from "../components/AppBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Home = () => {
  return (
    <View>
      <AppBar
        title="Home"
        onSettingsPress={() => console.log("Settings pressed")}
      />
      <ProfileList></ProfileList>
    </View>
  );
};

export default Home;
