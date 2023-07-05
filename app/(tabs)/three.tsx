import { StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';

interface Product {
  id: number;
  titre: string;
  img: string;
}

export default function TabOneScreen() {
  const [imageList, setImageList] = useState([
    { id: 1, source: require('../../assets/images/rectangle_3.png'), description: 'Description de l\'image 1', isFavorite: false },
    { id: 2, source: require('../../assets/images/rectangle_3.png'), description: 'Description de l\'image 2', isFavorite: false },
    // Ajoutez d'autres éléments d'image selon vos besoins
  ]);

  const handleFavorite = (image: { id: number }) => {
    const updatedImageList = imageList.map((item) =>
      item.id === image.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setImageList(updatedImageList);
  };

  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("http://192.168.1.15/CUBES3-WEBSITE/api/apiGetProduct.php", {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/ImageSorties.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <ScrollView>
            {product.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.imageContainer}
                onPress={() => handleFavorite(item)}
              >
                <Image source={{ uri: item.img }} style={styles.image} />
                <Text style={styles.title}>{item.titre}</Text>
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
