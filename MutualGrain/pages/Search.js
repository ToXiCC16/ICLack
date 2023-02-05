import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import * as Location from 'expo-location';
import SearchBar from '../components/SearchBar';
import ProfileCard from '../components/ProfileCard';
// import products from '../components/ProfileList';

const products = [
  {
    id: 1,
    name: "Joel",
    type: 'farmer',
    product: 'apples',
    amount: 20,
    price: 5,
    imageSource: require("../assets/dummy-profile-pic.png")
  },
  {
    id: 2,
    name: "Tom",
    type: 'distributor',
    product: 'oranges',
    amount: 30,
    price: 3,
    imageSource: require("../assets/dummy-profile-pic.png")
  },
  {
    id: 3,
    name: "Dick",
    type: 'farmer',
    product: 'bananas',
    amount: 40,
    price: 2,
    imageSource: require("../assets/dummy-profile-pic.png")
  },
  {
    id: 4,
    name: "Harry",
    type: 'distributor',
    product: 'grapes',
    amount: 50,
    price: 4,
    imageSource: require("../assets/dummy-profile-pic.png")
  },
];

const Item = ({ data }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{data.name}</Text>
    <Text style={styles.title}>{data.product}</Text>
  </View>
);

const Search = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [phrase, setPhrase] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
        maximumAge: 10000
      });

      setUserLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (userLocation) {
      setUserLatitude(userLocation.coords.latitude);
      setUserLongitude(userLocation.coords.longitude);
    }
  }, [userLocation]);

  return (
    <View style={styles.container}>
      <SearchBar 
        clicked = {isClicked} 
        setClicked = {setIsClicked}
        searchPhrase = {phrase}
        setSearchPhrase = {setPhrase}/>
      
      <List
        searchPhrase={phrase}
        data={products}
        setClicked={setIsClicked}
      />
      <MapView
        style={{ height: '100%', width: '100%', zIndex : 1 }}
        region={{
          latitude: userLocation ? userLocation.coords.latitude : 0,
          longitude: userLocation ? userLocation.coords.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {/* <Marker 
          coordinate = {{latitude : userLocation ? userLocation.coords.latitude : 0, 
                         longitude : userLocation ? userLocation.coords.longitude : 0}}
          title = {"you are here"}/> */}
      </MapView>
    </View>
  );
};

const List = (searchPhrase, setClicked) => {
  const renderItem = ({ item }) => {
    if (searchPhrase !== "" &&
       (item.name.toUpperCase().includes(searchPhrase.toString().toUpperCase().trim().replace(/\s/g, ""))
      || item.product.toUpperCase().includes(searchPhrase.toString().toUpperCase().trim().replace(/\s/g, "")))) {
      return <ProfileCard data = {item}/>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
    position : 'absolute'

  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});

export default Search;
