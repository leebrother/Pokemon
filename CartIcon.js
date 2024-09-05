import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartDetails } from '../components/CartDetails.js';
import { CartProvider } from '../components/CartDetails.js';

//This component creates the Cart icon itself to be displayed
//on the top right corner with the current item count.
export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartDetails);

  return (
    <View style={styles.container}>
      <Text style={styles.text}
        onPress={ ()=> {
          navigation.navigate('Cart');
        } }
      > Cart ({getItemsCount()}) //show "Cart" with the number of items added/subtracted in parentheses
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'green',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold,'
  },
});
