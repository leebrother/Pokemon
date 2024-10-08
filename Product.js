import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

//This is a separate function component for a single Product
export function Product({name, icon, onPress}) {
//export function Product({name, onPress}) {

  return (
    //Add onPress event handler to get to the ProductDetails screen - don't need it
    //<TouchableOpacity style={styles.grid} onPress={onPress}>
    <TouchableOpacity style={styles.grid} onPress={onPress}>
      <Image style={styles.icon} source={icon}/>
      <View style={styles.name}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  grid: {

      backgroundColor: 'white',
      borderRadius: 16,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 1,
      marginVertical: 20,
  },
  icon: {
      height: 260,
      borderTopLeftRadius: 16,
      bordertopRightRadius: 16,
      width: '100%',
  },
  name: {
      fontSize: 22, //fontSie could be 32
      fontWeight: 'bold',
  }
}
);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
