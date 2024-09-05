import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CartDetails } from '../components/CartDetails.js';

//import { getProduct } from '../screens/ProductsScreen.js';
import { ProductsScreen } from '..screens/ProductsScreen.js';

//This is the Cart Screen, which will display the Pokemon names
export function CartScreen ({route, navigation}) {
    const {items, getItemsCount, addItemToCart, subtractItemFromCart} = useContext(CartDetails);

    const [plus, setPlus] = useState({});
    const [minus, setMinus] = useState({});

    //productID is from params from imported ProductsScreen
    const { productID } = route.params;

    useEffect(() => {
      //Get Pokemon name & url by productID using setProduct from ProductsScreen
      setPlus(getProduct(productID));
    });

    useEffect(() => {
      //Get Pokemon name & url by productID using setProduct from ProductsScreen
      setMinus(getProduct(productID));
    });

    //This function handles to add item to the cart when + button is pressed
    function PlustoCart() {
      //return (
        //pass parameter to add new cart count = count + 1
        //let items = ____  + 1
        //getItemsCount.addItemToCart(items)
        //
        //addItemToCart(plus.id);
        //Alternate code
        addItemToCart(plus.name);
      //);
    };

    //This function handles to subtracts item when - button is pressed
    function MinustoCart() {
      //return (
        //let items = ____ - 1;
        //getItemsCount.subtractItemFromCart(items)
        //
        //subtractItemFromCart(minus.id);
        //Alternate code
        subtractItemFromCart(minus.name)
      //);
    };

    function renderItem({item}) {
      return (
        //Names with plus and minus buttons to add or subtract
        <View style={styles.cartLine}>
          <Text style={styles.NameLine}>{item.name}</Text>
          <Button title="+" onPress={PlustoCart}/>
          <Button title="-" onPress={MinustoCart}/>
        </View>
      );
    }

    return (
      <FlatList style={styles.itemsList}
        contentContainerStyle={styles.itemsListcontainer}
        data={items}
        renderItem={renderItem}
        //Make sure keyExtractor functions - check if correct
        //keyExtractor={(item) => {item.product.id.toString()} }
        keyExtractor={(item) => {item.name.toString()}}
      />
    );
}

const Styles = StyleSheet.create(
  {
  cartLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameLine: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333'
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListcontainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHoriontal: 8,
  },
});
