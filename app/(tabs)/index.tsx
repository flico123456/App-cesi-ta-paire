import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.com}>
        <Text style={styles.titre}>CESI TA PAIRE</Text>
        <Image style={styles.image_titre} source={{uri:"https://cdn.discordapp.com/attachments/1044193079688712213/1096070322601611264/rectangle_3.png"}}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
