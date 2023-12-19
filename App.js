import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button, SafeAreaView, ScrollView } from 'react-native';
import Card from './src/components/Cards/Card';


export default function App() {

  const dubmmyData = [
    {
      name: "Squirtle",
      image: require("./assets/squirtle.png"), // Replace with the actual image path
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Charmander",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
    },
    {
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"), // Replace with the actual image path
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("./assets/pikachu.png"), // Replace with the actual image path
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
    }

  ]



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headinContainer}>
        <Text style={styles.heading}>Pokemon Card</Text>
      </View>
      <ScrollView>
        {dubmmyData.map(data => <Card key={data.name} {...data} />)}
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    padding: 50,
    paddingLeft: 30,
    paddingRight: 30
  },

  headinContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  },
  heading:{
    borderRadius:16,
    borderWidth:2,
    paddingVertical:10,
    paddingHorizontal:30,
    fontSize:20,
    fontWeight:"bold",
    color:"blue"
  }
});
