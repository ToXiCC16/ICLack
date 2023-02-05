import { View, Text, Image, StyleSheet, Modal, Pressable } from "react-native";
import React, {useState} from 'react';
import products from "./listing";

const ProfileCard = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType = 'slide'
        transparent = {true}
        visible = {modalVisible}
        onRequestClose = {() => {
          Alert.alert('Modal has been closed')
          setModalVisible(!modalVisible);
        }} 
      >
        <View style = {styles.modal}>
          <Image source={data.imageSource} style = {{height : 50, width : 50}}/>
          <Text>name: {data.name}</Text>
          <Text>type: {data.type}</Text>
          <Text>products: {data.product}</Text>
          <Text>amount: {data.amount}kg</Text>
          <Text>price: £{data.price} per kg</Text>
          <Pressable
            style = {[styles.button]}
            onPress = {() => {
              setModalVisible(false)
            }}
          >
            <View style = {{backgroundColor : "#e6e6fa", borderRadius : 15, padding : 10,}}>
              <Text>CLOSE</Text>
            </View>
          </Pressable>
        </View>
        
      </Modal>
      <Pressable
        style = {[styles.button]}
        onPress = {() => {
          setModalVisible(true)
        }}
      >
        <Image source={data.imageSource} style={styles.image} />
        <Text style={styles.name}>{data.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6fa",
    borderWidth: 1,
    borderRadius: 10,
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
  
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center"
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

export default ProfileCard;
