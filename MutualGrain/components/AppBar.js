import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppBar = ({ onSettingsPress }) => (
  <TouchableOpacity onPress={onSettingsPress} style = {styles.settingsView}>
    <Ionicons name="ios-settings" size={24} color="#fff" />
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  appBarContainer: {
    height: 50,
    width: '100%',
    padding: 10,
    backgroundColor: '#d6c6ea',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity : 0
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  settingsView: {
    positon: 'absolute',
    left: 305,
    top : 590,
    alignItems: "center",
    flexDirection: 'row', 
    padding: 10,
    zIndex: 3
  },
});

export default AppBar;
