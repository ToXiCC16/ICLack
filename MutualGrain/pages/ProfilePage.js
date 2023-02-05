import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

class Profile {
  constructor(name, id, usertype, phone, email, region, coordinate, range, products, imageUrl) {
    this.name = name;
    this.id = id;
    this.usertype = usertype;
    this.phone = phone;
    this.email = email;
    this.region = region;
    this.coordinate = coordinate;
    this.range = range;
    this.products = products;    
    this.imageUrl = imageUrl;    
  }
}

person = new Profile("John Smith", "0000001", "Seller", "1234567890", "js@ic.ac.uk", "Region X", "0,0", "0", "", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFinzgy82kMeBR3T9QDhYweg7RBm-HPZ1Qkgi-qrfxT4M554JxEfhjAICm8_61_2_myk&usqp=CAU")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 8,
    minHeight: 200,
    paddingTop: 60,
  },
  sectionContainer: {
    padding: 20,
    alignItems: 'center'
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  divider: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  picture: {
    width: 100,
    height: 100,

  },
});

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: person.imageUrl,
          }}
        />
        <Text style={styles.sectionHeader}> {person.name} </Text>
        <Text> Usertype: {person.usertype}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Contacts</Text>
        <Text>Email: {person.email}</Text>
        <Text>Phone number: {person.phone}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Contacts</Text>
        <Text>Region: {person.region}</Text>
        <Text> Coordinate: {person.coordinate}</Text>
        <Text> Distance from you: {person.range}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Products</Text>
      </View>
    </ScrollView>
  );
};

export default App;