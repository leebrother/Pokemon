import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native';
//import { Product } from '../components/Product.js';

//Need getProduct function to get product
//details by Pokemon name from the array -
import { ProductsScreen } from '../screens/ProductsScreen.js';
import { CartDetails } from '../CartDetails.js ';

export function ProductDetails({route}) {

  const { productID } = route.params;
  const [ product, setProduct ] = useState({});
  const { addItemToCart } = useContext(CartDetails);
  //State variable and function for the pokemon-species
  const [ DetailData, setDetailData ] = useState([]);

  useEffect(() =>  {
    //Import the API endpoint to retrieve the data for the
    //for each hash containing the name & url
    fetch('https://pokeapi.co/api/v2/pokemon-species')
       .then(response => response.json())
        //Alternate code - You also have to go through the array of hashes for each one
        //
        //This through another method to make the fetch calls for the url
        //for each name in the hash using setDetailData
        // to get details flavor_text_entries.flavor_text

        //This goes through each hash to find the actual details
        //flavor_test_entries.flavor_text by name or id
        //.then(data => setDetailData(
        //    data.results.forEach(function(pokemon) {
               //called for each hash with name to get description
        //       fetchPokemonDetails(pokemon);
        //    }
        //    )
        //   ))

        //Get each name & url hash only and assign them to state variable DetailData
        //using the setDetailData state function
       .then(DetailData => setDetailData(DetailData.results))
        //.catch(error => console.log(error));
  },[]);

  useEffect(() => {
    //Find product by name
    //setProduct( Product(productID) ); //this is incorrect - get specific Pokemon
    setProduct(getPokemonDetails(productID)); //get Pokemon details by finding using productID
  }
  );

  function fetchPokemonDetails(pokemon) {
    let url = pokemon.url;

    //Fetch url to get the details data flavor_text from the hash by extrating the data
    fetch(url)
      .then(response => response.json())
      //This syntax can also be rewritten in another way
      .then(function(pokeData) {
        let details = pokeData.flavor_text_entries.flavor_text;
        return details;
      }
      )
      //.catch(error => console.log(error));
  }

  //Find Pokemon details from a particular name (id)
  function getPokemondetails(id) {
    //Find from DetailData Pokemon details from name id
    //return DetailData.find((product)=>(product.id == id))
    return DetailData.find((product)=>(product.name == id))
  }

  function OnAddToCart() {
    //Add Item to cart by productID - rewrite and double check
    //addItemToCart(product.id);
    addItemToCart(product.name);
  }

  //Summary is fetched from product.url to extract flavor_text_entries.flavor_text_entries
  //**this should be at the top of this ProductDetails function component**
  let summary = fetchPokemonDetails(product);

  //This displays the Pokemon name, its summary and the "Add to Cart" button
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.name}>{product.name} </Text>
          //Alternate code
          //summary is fetched by product.url through fetchPokemonDetails
          <Text style={styles.detail}>{summary}</Text>
          //<Text style={styles.detail}>{product.summary}</Text>
          <Button onPress={OnAddToCart} title="Add To Cart"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  name: {
    fontSize: '16',
    fontWeight: 'bold',
  },
  detail: {
    fontsize: '16',
    fontweight: '400',
    color: '#787878', //
    marginBottom: 16,
  },

}
);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
