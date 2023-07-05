import { StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';

interface Product {
  id: number;
  source: string;
  description: string;
}


export default function TabOneScreen() {
  const [favoriteImages, setFavoriteImages] = useState<Product[]>([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const userLoggedIn = checkUserLoggedIn();

    // Mettre à jour l'état de connexion de l'utilisateur
    setIsUserLoggedIn(userLoggedIn);

    if (userLoggedIn) {
      // Si l'utilisateur est connecté, récupérer ses favoris depuis l'API
      fetchFavoriteImages()
        .then((data) => setFavoriteImages(data))
        .catch((error) => console.error(error));
    }
  }, []);

  const checkUserLoggedIn = () => {
    // Code pour vérifier si l'utilisateur est connecté
    // Renvoie true si l'utilisateur est connecté, false sinon
    // Remplacez cette logique par votre propre vérification de connexion
    // par exemple, en utilisant le contexte d'authentification de votre application
    return true; // Modifiez cette valeur en fonction de votre logique de connexion
  };

  const fetchFavoriteImages = async () => {
    try {
      const response = await fetch('http://votre-api.com/favorites'); // Remplacez l'URL par l'URL de votre API pour récupérer les favoris de l'utilisateur
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Une erreur s\'est produite lors de la récupération des favoris.');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/ImageFavoris.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Vos favoris ici !</Text>
          {isUserLoggedIn ? (
            <ScrollView contentContainerStyle={styles.content}>
              {favoriteImages.length > 0 ? (
                favoriteImages.map(image => (
                  <TouchableOpacity key={image.id} style={styles.imageContainer}>
                    <Image source={{ uri: image.source }} style={styles.image} resizeMode="cover" />
                    <Text style={styles.description}>{image.description}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.errorText}>Vous n'avez pas encore de favoris.</Text>
              )}
            </ScrollView>
          ) : (
            <Text style={styles.errorText}>Connectez-vous pour afficher vos favoris.</Text>
          )}
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
  errorText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
