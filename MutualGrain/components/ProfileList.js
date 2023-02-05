import React from "react";
import { View, FlatList } from "react-native";
import ProfileCard from "./ProfileCard";
// import products from "./listing";

// const dummyData = [
//   // { key: "Devin", imageSource: require("./images/devin.jpg") },
//   // { key: "Dan", imageSource: require("./images/dan.jpg") },
//   // { key: "Dominic", imageSource: require("./images/dominic.jpg") },
//   // { key: "Jackson", imageSource: require("./images/jackson.jpg") },
//   // { key: "James", imageSource: require("./images/james.jpg") },
//   { name: "Devin", imageSource: require("../assets/dummy-profile-pic.png") },
//   { name: "Joel", imageSource: require("../assets/dummy-profile-pic.png") },
//   { name: "Dominic", imageSource: require("../assets/dummy-profile-pic.png") },
//   { name: "Jackson", imageSource: require("../assets/dummy-profile-pic.png") },
//   { name: "James", imageSource: require("../assets/dummy-profile-pic.png") },
// ];

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

const ProfileList = () => {
  return (
    <View  style = {{marginBottom : 0, backgroundColor :  "#9893ea"}}>
      <FlatList
        data={products}
        
        renderItem={({ item }) => (
          <ProfileCard data={item}/>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default ProfileList;
