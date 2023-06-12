import { StyleSheet } from 'react-native';
import React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native/Libraries/Components/TextInput/TextInput';
import { useState } from 'react';
import LoginFunction from '../../components/Formulaire-login';

export default function TabTwoScreen() {


  return (
    <View style={styles.container}>
      <View style={styles.Titre}>
        <Text style={styles.TitreFont}>Bienvenue l'application CESI ta Paire</Text>
        <LoginFunction/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titre: {
    flex: 1,
    margin: 30,
    alignItems: 'center'
  },
  TitreFont: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
