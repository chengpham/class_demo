import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function PokemonDetail(props) {
  const params = props.route.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(params.pokemon.url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPokemon(data);
      })
  }, [])

  return(
    <View style={styles.container}>
      <Image
        source={{
          uri: pokemon.id ? pokemon.sprites.front_default: null
        }}
        style={styles.image}
      />
      <Text style={styles.h1}>{pokemon.name}</Text>
      <Text>Height: {pokemon.height}cm</Text>
      <Text>Weight: {pokemon.weight}lb</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 20
  },
  image: {
    height: 400,
    width: 400
  }
})

export default PokemonDetail;