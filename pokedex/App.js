import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetail from './components/PokemonDetails';

const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2/';
const FIRST_100_POKEMON_QUERY = 'pokemon?limit=100';


const Stack = createStackNavigator();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`${POKEMON_API_ENDPOINT}${FIRST_100_POKEMON_QUERY}`)
      .then(res => res.json())
      .then(payload => {
        setPokemonList(payload.results);
      })
  }, [])

  return (
    <NavigationContainer style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >
          <Stack.Screen
            name="Pokemon List"
            children={({ navigation }) => {
              return <PokemonList list={pokemonList} navigation={navigation}/>
            }}
          />
          <Stack.Screen
            name="Pokemon Details"
            component={PokemonDetail}
          />
        </Stack.Navigator>
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
  }
});


// Unable to resolve module @react-navigation/stack from /Users/lam/Teaching/cohort_39/pokedex/App.js: @react-navigation/stack could not be found within the project.

// If you are sure the module exists, try these steps:
//  1. Clear watchman watches: watchman watch-del-all
//  2. Delete node_modules and run yarn install
//  3. Reset Metro's cache: yarn start --reset-cache
//  4. Remove the cache: rm -rf /tmp/metro-*
//    5 | import Header from './components/Header';
//    6 | import { NavigationContainer } from '@react-navigation/native';
// >  7 | import { createStackNavigator } from '@react-navigation/stack';
//      |                                       ^
//    8 |
//    9 | const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2/';
//   10 | const FIRST_100_POKEMON_QUERY = 'pokemon?limit=100';

// ABI40_0_0RCTFatal
// __37-[ABI40_0_0RCTCxxBridge handleError:]_block_invoke
// _dispatch_call_block_and_release
// _dispatch_client_callout
// _dispatch_main_queue_callback_4CF
// __CFRUNLOOP_IS_SERVICING_THE_MAIN_DISPATCH_QUEUE__
// __CFRunLoopRun
// CFRunLoopRunSpecific
// GSEventRunModal
// -[UIApplication _run]
// UIApplicationMain
// main
// start
