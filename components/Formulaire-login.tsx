import React from "react"
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"


export default function LoginFunction() {

    const [identifiant, setIdentifiant] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showErreur, setShowErreur] = React.useState(false)
    const [name, setName] = React.useState('Pas connecté') 
    const [surname, setSurName] = React.useState('')




    const handleConnexion = () => {
        const hashedPassword = SHA1(password).toString(enc.Hex);

        console.log(hashedPassword)

        const data = {
          mail: identifiant,
          password: hashedPassword,
        };
    
        fetch('http://172.20.10.2:8888/Projetcesi/api/apiGetUser.php?', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(data => {
            // Traitement des données de réponse
            console.log(data);
            console.log("Connecté")
            const user = data[0];
            setName(user.nom)
            setSurName(user.prenom)
          })
          .catch(error => {
            // Gestion des erreurs
            setShowErreur(true)
            console.log("Erreur")
          });
      };

    return (
        <View>
            <View style={styles.main}>
                <Text style={styles.Text}>Adresse e-mail :</Text>
                <TextInput style={styles.input} onChangeText={setIdentifiant} value={identifiant} autoComplete="off" placeholder="Tapez votre adresse e-mail"/>
                <Text style={styles.Text}>Mot de passe :</Text>
                <TextInput style={styles.input} onChangeText={setPassword} value={password} autoComplete="off" secureTextEntry placeholder="Tapez votre mot de passe"/>
                {showErreur && <Text style={styles.TextErreur}>Mot de passe ou adresse e-mail incorrect</Text>}
                <TouchableOpacity style={styles.button} onPress={handleConnexion}>
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      fontSize: 15
    },
    Text: {
        fontSize: 20,
    },
    TextErreur: {
        color: "red"
    },
    button: {
        marginTop: 15,
        backgroundColor: 'black',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });