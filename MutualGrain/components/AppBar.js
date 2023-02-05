import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppBar = ({ title, onSettingsPress }) => (
  <View style={styles.appBarContainer}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onSettingsPress}>
      <Ionicons name="ios-settings" size={24} color="#fff" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  appBarContainer: {
    height: 50,
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AppBar;
