import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';

function PokemonList({ list, navigation }) {
  return(
    <ScrollView style={styles.container}>
      {
        list.map((pokemon, i) => {
          return(
            <TouchableHighlight 
              underlayColor="lightblue"
              onPress={(event) => { navigation.navigate('Pokemon Details', { pokemon } )}}
              key={i}
            >
              <View style={styles.pokemon}>
                <Text>{pokemon.name}</Text>
              </View>
            </TouchableHighlight>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pokemon: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PokemonList;