import { StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [imageList, setImageList] = useState([
    { id: 1, source: require('../../assets/images/rectangle_3.png'), description: 'Description de l\'image 1', isFavorite: false },
    { id: 2, source: require('../../assets/images/rectangle_3.png'), description: 'Description de l\'image 2', isFavorite: false },
    // Ajoutez d'autres éléments d'image selon vos besoins
  ]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/ImageFavoris.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Vos favoris ici !</Text>
          <ScrollView contentContainerStyle={styles.content}>
            {imageList.map(image => (
              <TouchableOpacity key={image.id} style={styles.imageContainer}>
                <Image source={image.source} style={styles.image} resizeMode="cover" />
                <Text style={styles.description}>{image.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: 'white',
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
  },
  imageContainer: {
    marginBottom: 100,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  description: {
    color: 'white',
    marginTop: 10,
  },
  starIcon: {
    marginTop: 10,
  },
});
