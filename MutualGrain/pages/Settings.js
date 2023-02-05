import { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Modal, Pressable, StyleSheet, FlatList, Image } from 'react-native';

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
  

const Settings = () => {
    const name = "Joel";
    const [catalogVisible, setCatalogVisible] = useState(false);
    const renderItem1 = ({item}) => {
        if (item.name === name) {
            return(
                <View style = {{alignContent : "center"}}>
                    <Text style = {{fontSize : 20}}>{item.amount}kg of {item.product}</Text>
                    <Text></Text>
                </View>
            )
        }
        else return null;
    };

    const renderItem2 = ({item}) => {
        if (item.name === name) {
            return(
                <View style = {{alignContent : "center"}}>
                    <Image source = {item.imageSource} style = {{height : 50, width : 50}}/>
                    <Text style = {{fontSize : 20}}>{item.name}</Text>
                    <Text style = {{fontSize : 20}}>{item.type}</Text>
                    <Text></Text>
                </View>
            )
        }
        else return null;
    };
    return(
        <SafeAreaView style = {{backgroundColor : "#9893ea", height : "100%", alignItems : "center"}}>
            <Text  style = {{fontSize : 30}}>Hi, {name}!</Text>
            <ScrollView>
                <View>
                    <Modal
                        animationType = 'slide'
                        transparent = {true}
                        visible = {catalogVisible}
                        onRequestClose = {() => {
                        Alert.alert('Modal has been closed')
                        setCatalogVisible(!catalogVisible);
                        }} 
                    >
                        <View style = {styles.modal}>
                            <FlatList data = {products} renderItem={renderItem2} keyExtractor={(item) => item.name}/>
                            <Pressable
                                style = {[styles.button]}
                                onPress = {() => {
                                setCatalogVisible(false)
                                }}
                            >
                                <View style = {{backgroundColor : "#e6e6fa", borderRadius : 15, padding : 10,}}>
                                <Text>CLOSE</Text>
                                </View>
                            </Pressable>
                        </View>
                    </Modal>
                    <Pressable onPress = {() => {
                        setCatalogVisible(true)
                    }}>
                        <View  style = {styles.container}>
                            <Text style = {{fontSize : 30}}>Edit/View your Catalog</Text>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Modal
                        animationType = 'slide'
                        transparent = {true}
                        visible = {catalogVisible}
                        onRequestClose = {() => {
                        Alert.alert('Modal has been closed')
                        setCatalogVisible(!catalogVisible);
                        }} 
                    >
                        <View style = {styles.modal}>
                            <FlatList data = {products} renderItem={renderItem2} keyExtractor={(item) => item.name}/>
                            <Pressable
                                style = {[styles.button]}
                                onPress = {() => {
                                setCatalogVisible(false)
                                }}
                            >
                                <View style = {{backgroundColor : "#e6e6fa", borderRadius : 15, padding : 10,}}>
                                <Text>CLOSE</Text>
                                </View>
                            </Pressable>
                        </View>
                    </Modal>
                    <Pressable onPress = {() => {
                        setCatalogVisible(true)
                    }}>
                        <View  style = {styles.container}>
                            <Text style = {{fontSize : 30}}>Edit/View your Profile</Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Settings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e6e6fa",
      padding : 20,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#a3a385",
      borderBottomWidth: 0,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      zIndex : 1
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width : "100%",
      alignContent : "center",
      justifyContent : "center",
      alignItems : "center"
    },
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eeffff",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#ddd",
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        marginBottom: 150,
        zIndex : 1,
        padding : 30
      }
});