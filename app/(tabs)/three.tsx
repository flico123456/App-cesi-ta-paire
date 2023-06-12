import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DernieresSortiesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ceci est la page des dernières sorties.</Text>
      <Text style={styles.text}>Vous pouvez afficher ici les informations sur les derniers produits.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});


