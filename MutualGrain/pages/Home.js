import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
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
    <SafeAreaView style={{ marginTop: 0 }}>
      <AppBar
        title="Home"
        onSettingsPress={() => console.log("Settings pressed")}
      />
      <View style={{ flex: 1, marginTop: 20 }}>
        <ProfileList></ProfileList>
      </View>
    </SafeAreaView>
  );
};

export default Home;
