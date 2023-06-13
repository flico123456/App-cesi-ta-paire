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

  const handleFavorite = (image) => {
    const updatedImageList = imageList.map((item) =>
      item.id === image.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setImageList(updatedImageList);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/ImageSorties.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Dernières sorties</Text>
          <ScrollView contentContainerStyle={styles.content}>
            {imageList.map(image => (
              <TouchableOpacity key={image.id} style={styles.imageContainer}>
                <Image source={image.source} style={styles.image} resizeMode="cover" />
                <Text style={styles.description}>{image.description}</Text>
                <TouchableOpacity onPress={() => handleFavorite(image)}>
                  <FontAwesome
                    name={image.isFavorite ? 'star' : 'star-o'}
                    size={24}
                    color={image.isFavorite ? 'yellow' : 'white'}
                    style={styles.starIcon}
                  />
                </TouchableOpacity>
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
