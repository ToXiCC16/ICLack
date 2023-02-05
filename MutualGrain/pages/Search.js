import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Constants, MapView, Location, Permissions } from "expo";
import React, { useState, useEffect } from "react";

const Search = () => {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  };

  componentDidMount = () => {
    this._getLocationAsync();
  };

  _handleMapRegionChange = (mapRegion) => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
  };

  render = () => {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: 400 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        >
          {userLocation && <Marker coordinate={userLocation.coords} />}
        </MapView>

        <StatusBar style="auto" />
      </View>
    );
  };
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
