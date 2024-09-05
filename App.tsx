/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//useState, useEffect hooks added
import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,  //only one needed, really!
  //FlatList,
  //Text,
  //useColorScheme,
  //View,
} from 'react-native';

import {
  Colors,
  //DebugInstructions,
  Header,
  //LearnMoreLinks,
  //ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import store from './store';

//Import React Navigation components for the screens
import { NavigationContainer } from 'react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Import components from their respective files, each js file
//is a screen file and the other components like icon and
//cart details are in components js files
import { ProductsScreen } from './screens/ProductsScreen.js';
import { ProductDetails } from './screens/ProductDetailsScreen.js';
import { CartScreen } from './screens/CartScreen.js';
import { CartIcon } from './components/CartIcon.js' ;
import { CartProvider } from './components/CartDetails.js';

const ScreenStack = createNativeStackNavigator();

//SectionProps not in use
//type SectionProps = PropsWithChildren<{
//  title: string;
//}>;

//All of Section can be commented out since Section tag is no longer in use
//function Section({children, title}: SectionProps): React.JSX.Element {
//  const isDarkMode = useColorScheme() === 'dark';
//  return (
//    <View style={styles.sectionContainer}>
//      <Text
//        style={[
//          styles.sectionTitle,
//          {
//            color: isDarkMode ? Colors.white : Colors.black,
//          },
//        ]}>
//        {title}
//      </Text>
//      <Text
//        style={[
//          styles.sectionDescription,
//          {
//            color: isDarkMode ? Colors.light : Colors.dark,
//          },
//        ]}>
//        {children}
//      </Text>
//    </View>
//  );
//}

//Original app function from template, rewritten more simply below
//function App(): React.JSX.Element {
//  const isDarkMode = useColorScheme() === 'dark';

//  const backgroundStyle = {
//    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//  };

function App() {

  return (
    //This part displays all three screens on the React Native app
    <CartProvider>
      <NavigationContainer>
         <ScreenStack.Screen name='Products' component={ProductsScreen}
         options={ ({navigation}) => ({
           title: 'Pokemon',
           headerTitleStyle: styles.headerTitle,
           headerRight: () => <CartIcon navigation={navigation}/>,
         })
         }
         />
         <ScreenStack.Screen name='ProductDetails' component={ProductDetails}
         options={ ({navigation}) => ({
           title: 'Pokemon Details',
           headerTitleStyle: styles.headerTitle,
           headerRight: () => <CartIcon navigation={navigation}/>,
         })
         }
         />
         <ScreenStack.Screen name='Cart' component={CartScreen}
         options={ ({navigation}) => ({
           title: 'Shopping Cart',
           headerTitleStyle: styles.headertitle,
           headerRight: () => <CartIcon navigation={navigation}/>,
         })
         }
         />
      </NavigationContainer>
    </CartProvider>

    //You do not need anything between the Provider tags, so everything
    //in between those tags are commented out - thay are not in use
//    <Provider store={store}>
//    <SafeAreaView style={backgroundStyle}>
//      <StatusBar
//        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//        backgroundColor={backgroundStyle.backgroundColor}
//      />

      // Commented out since we now have React Navigator for the screens instead
//      <ScrollView
//        contentInsetAdjustmentBehavior="automatic"
//        style={backgroundStyle}>
//        <Header />
//        <View
//          style={{
//            backgroundColor: isDarkMode ? Colors.black : Colors.white,
//          }}>
//          <Section title="Step One">
//            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//            screen and then come back to see your edits.
//          </Section>
//          <Section title="See Your Changes">
//            <ReloadInstructions />
//          </Section>
//          <Section title="Debug">
//            <DebugInstructions />
//          </Section>
//          <Section title="Learn More">
//          </Section>
//          <LearnMoreLinks />
//        </View>
//      </ScrollView>


//    </SafeAreaView>
//    </Provider>
);
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  },

  //Below stylesheet not necessary (it came with the code template)
  //sectionContainer: {
  //  marginTop: 32,
  //  paddingHorizontal: 24,
  //},
  //sectionTitle: {
  //  fontSize: 24,
  //  fontWeight: '600',
  //},
  //sectionDescription: {
  //  marginTop: 8,
  //  fontSize: 18,
  //  fontWeight: '400',
  //},
  //highlight: {
  //  fontWeight: '700',
  //}
});

export default App;
