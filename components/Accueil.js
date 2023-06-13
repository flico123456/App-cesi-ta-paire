import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ImageAA from '../assets/ImageAccueil.jpg'

export default function Accueil() {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={ImageAA}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.container}>
              <View style={{justifyContent: 'flex-start' }}>
                <Text style={styles.title}>CesiTaPaire</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={styles.subtitle}>Restez au courant des nouvelles sorties</Text>
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
        justifyContent: 'center',
        padding: 20,
    },
      title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        marginTop: 20,
        textDecorationLine: 'underline',
        fontFamily: 'Apple SD Gothic Neo',
    },
      subtitle: {
        fontSize: 20,
        color: 'white',    
    },
    
  });