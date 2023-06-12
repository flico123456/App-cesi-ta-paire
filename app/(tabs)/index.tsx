//import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
//import { Text, View } from '../../components/Themed';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Image1 from '../assets/images/ImageAccueil.jpg'

export default function TabOneScreen() {
  return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={Image1}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <View style={{justifyContent: 'flex-start' }}>
                <Text style={styles.TitreFont}>CesiTaPaire</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text style={styles.TitreFont}>Restez au courant des nouvelles sorties</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
},
  container: {
    flex: 1,
    alignItems: 'center',
  },
  com: {
    flex: 1,
    alignContent: 'center',
  },
  titre: {
    marginTop: 20,
    fontSize: 20,
  },
  image_titre: {
    marginTop: 20,
    width: 320,
    height: 200,
  },

  TitreFont: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
},
});
