import React from "react";
import { View, FlatList } from "react-native";
import ProfileCard from "./ProfileCard";

const dummyData = [
  // { key: "Devin", imageSource: require("./images/devin.jpg") },
  // { key: "Dan", imageSource: require("./images/dan.jpg") },
  // { key: "Dominic", imageSource: require("./images/dominic.jpg") },
  // { key: "Jackson", imageSource: require("./images/jackson.jpg") },
  // { key: "James", imageSource: require("./images/james.jpg") },
  { key: "Devin", imageSource: require("../assets/dummy-profile-pic.png") },
  { key: "Dan", imageSource: require("../assets/dummy-profile-pic.png") },
  { key: "Dominic", imageSource: require("../assets/dummy-profile-pic.png") },
  { key: "Jackson", imageSource: require("../assets/dummy-profile-pic.png") },
  { key: "James", imageSource: require("../assets/dummy-profile-pic.png") },
];

const ProfileList = () => {
  return (
    <View>
      <FlatList
        data={dummyData}
        style={{width: '100%'}}
        renderItem={({ item }) => (
          <ProfileCard name={item.key} imageSource={item.imageSource} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default ProfileList;
