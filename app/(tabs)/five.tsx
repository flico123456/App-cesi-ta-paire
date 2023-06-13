import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const ContactFormPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Effectuez ici les actions nécessaires lorsque le formulaire est soumis,
    // comme l'envoi des données à votre backend ou l'affichage d'une confirmation.

    Alert.alert('Formulaire soumis !', 'Merci pour votre message.');

    // Réinitialisez les champs du formulaire
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/ImageContact.jpg')} // Remplacez "background.jpg" par le chemin de votre image d'arrière-plan
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          placeholderTextColor="#000"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom"
          placeholderTextColor="#000"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          placeholderTextColor="#000"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <Button title="Envoyer" onPress={handleSubmit} />
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      alignItems: 'center', // Centrer les éléments horizontalement
      justifyContent: 'center', // Centrer les éléments verticalement
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    form: {
      width: '100%', // Utiliser la largeur maximale disponible
    },
    input: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      backgroundColor: '#ffe6e6',
    },
    messageInput: {
      height: 100,
    },
  });
  
  export default ContactFormPage;