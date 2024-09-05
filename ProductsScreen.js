import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from '..components/Product.js';

//The components below fetches the Pokemon data from the API endpoint,
//the name and url. Another nested fetch API call is then needed
//to get the icon by getting sprites.
//It then displays each name and icon by rendering each one
//through RenderProduct function component. Each name and icon
//is displayed by calling the Product component.

export function ProductsScreen ({navigation}) {
//Pokemon Products Screen with touch handler to take you
//to the Product Details screen in ProductDetails (with Add to Cart button)
//
//Navigation callback is passed through the onPress prop. It then displays
//the Product Details screen with the summary view with the Pokemon details
//once a Pokemon name is selected, and gives you the button to allow you
//to Add to Cart and take you to that screen to add or subtract from the cart

const [PokemonData, setData] = useState([]); //setData works as this.setState

//This useEffect hook is the same as ComponentDidMount() in the React lifecycle
useEffect(() =>  {
  //Import the API endpoint to retrieve the data - check if correct
  fetch('https://pokeapi.co/api/v2/pokemon')
     .then(response => response.json())
     .then(PokemonData => setData(PokemonData.results)); //Alternate code, returns raw name & url only
     //You also have to go through the array of hashes for each one
     //through another method to make the fetch calls for the url
     //for each name in the hash using fetchPokemonData
     //This calls the nested fetch API for the sprites and summary - rewritten
     //.then(data => setData(
    //      data.results.forEach(function(pokemon) {
    //        fetchPokemonData(pokemon); //called for each hash with name & url
    //      }
    //      )
    //     ))
     //console.log only used for debugging purposes, can be commented out
     //.catch(error => console.log(error));
},[]);

//This is the second separate fetch function that gets the Pokemon Data for a single Pokemon
//hash in the array - original code
function fetchPokemonData(pokemon) {
  let url = pokemon.url;

  //Fetch url to get the icon data from the hash
  let pokeImage = fetch(url)
    .then(response => response.json())
    //extract the sprite and return it as icon
    .then(function(pokemonData) {
        //This function extracts the data from the hash for display on on the FlatList
        //Get the sprites and return as icon
        let pokeSprites = pokemonData.sprites.backdefault; //get the sprites hash
        fetch(pokeSprites)
          .then(response => response.json())
          .then(data => data.results);
    }
   );
    //console.log can be commented out, only used for debugging purposes
    //.catch(error => console.log(error));
    //});

    //first get sprites hash from pokemonData and the
    //back_default url to fetch from to get its icon image

    //let poke = pokemonData.sprites.back_default;

    //fetch(poke)
    //   .then(response => response.json())
    //   .then(pokeImage => pokeImage.results);
    return pokeImage;
    //return data;

    //let poke = pokeData.find((pname) => (pname.name == pokemon.name));
}

//This function returns Pokemon product details by identifier name (was id)
//function getProduct(id) {
function getProduct(name) {
  //name is from PokemonData
  //Find from PokemonData array of objects by Pokemon name
  return PokemonData.find((product)=>(product.name == name));
  //return PokemonData.find((product)=>(product.id == id))
}

//RenderProduct fucntion component added for the button click event handler
//
//Alternate code
//function RenderProduct({item: product}) {
function RenderProduct({item}) {

  //get icon image from sprites by using getProduct using id- alternate code
  //
  //Alternate code
  //let pokeData = PokemonData.filter((pokeItem) => pokeItem.id == product.id);
  //let pokeData = PokemonData.filter((pokeItem) => pokeItem.name == product.name);
  //
  let pokeData = PokemonData.filter((pokeItem) => pokeItem.name == item.name);
  //item.name is the name of the Pokemon
  //
  //Alternate code - direct function call with item
  //let pokemonIcon = fetchPokemonData(item);
  //
  let pokemonIcon = fetchPokemonData(pokeData);

  return (
    //Alternate code
    //<Product {...product}
    //
    <Product name={item.name} icon={pokemonIcon}
    onPress={() => {
      navigation.navigate('ProductDetails', {
        //
        //productID: product.id, //original code
        //Alternate code
        //
        productID: item.name;
      }
      );
    }
    }
    />
  );
}

//Alternate way to write RenderProduct as an arrow function
//**Display only; no onClick event handler was added**
//const RenderProduct = ({item}) => {
    //Each item product has to be rendered for this Flatlist
    //Each item has an icon and name to display
//    return (
           //Display icon
//           <View styles={styles.icon}>{item.icon}</View>
           //Display name
//           <View styles={styles.item}>{item.name}</View>
           //<Text style={styles.name}{item.name}</Text>
//           );
    //this is the equivalent alternate code of writing:
    // return (<Product />);
//}

return(
  <View style={styles.screenView}>
  //FlatList is used to display Pokemon with names and icons
  //and to ensure it is scrollable to handle large number of Pokemon
  <FlatList
     style={styles.productList}
     contentContainerStyle={styles.productsContainerStyle} //maybe needed?
     data={PokemonData} //the entire array of PokemonData containing the hashes
     numColumns={2}
     renderItem={RenderProduct}
     keyExtractor{(item) => item.name} //extract by Pokemon name
     //keyExtractor{(item) => item.id.toString()} //extract by Pokemon name id
   />
   </View>
   );

}

//Stylesheet for ProductsScreen
const styles = StyleSheet.create({
    screenView: {
      flex: 2, //divide screen into 2 columns
      marginHorizontal: "auto",
      width: 800 //
    },
    productList: {
      backgroundColor: '#eeeeee',
    },
    productsContainerStyle: {
      backgroundColor: '#eeeeee',
      paddingVertical: 8,
      marginHoriontal: 8,
    },
    //Used as reference for Product style={styles.grid}
    //item is for alternate arrow function RenderProduct
//    item: {
//      flex: 1,
//      maxWidth: "50%", //for number of rows - 2 rows
//      alignItems: "center",
//      padding: 10,
//      backgroundColor: "rgba(249,180,45,0.25)",
//      borderWidth: 1.5,
//      borderColor: "#fff"
//    },
    //If icon style is needed for alternate RenderProduct - use with <Image />
    //icon: {
    //  width: 50,
    //  height: 50,
    //
    //},
});
