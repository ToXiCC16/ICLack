import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

const user = true;

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {/* <TouchableOpacity  style = {styles.settingsView}>
        <Ionicons name="ios-settings" size={24} color="#fff" />
      </TouchableOpacity> */}
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: "#42f44b",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Settings}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Messages"
          component={MessagePage}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message"
                color={color}
                size={size}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
      {/* <ProductList /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
  // return <MessagePage messages = {messages} />;
  // return <Message name="Me" message="Hi" />;
}

