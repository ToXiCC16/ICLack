import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

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

const ProductList = () => {
  const [selectedTab, setSelectedTab] = useState('farmer');

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <Text
          style={[
            styles.tab,
            selectedTab === 'farmer' ? styles.selectedTab : null
          ]}
          onPress={() => setSelectedTab('farmer')}
        >
          Farmer
        </Text>
        <Text
          style={[
            styles.tab,
            selectedTab === 'distributor' ? styles.selectedTab : null
          ]}
          onPress={() => setSelectedTab('distributor')}
        >
          Distributor
        </Text>
      </View>
      <ScrollView>
        {products.map(product => {
          if (product.type === selectedTab) {
            return (
              <View style={styles.productContainer} key={product.id}>
                <Text style={styles.product}>{product.product}</Text>
                <Text style={styles.amount}>Amount: {product.amount}</Text>
                <Text style={styles.price}>Price: {product.price}</Text>
              </View>
            );
          }
          return null;
        })}
      </ScrollView>
    </View>
  );
};


  

   

const ProductListing = ({ type, product, amount, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/dummy-profile-pic.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{product}</Text>
        <Text style={styles.productDetail}>{amount}</Text>
        <Text style={styles.productDetail}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  imageContainer: {
    width: 80,
    height: 80,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productDetail: {
    fontSize: 14,
    color: '#555'
  }
});

export default ProductList;

