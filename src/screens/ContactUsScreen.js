import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your details!!!</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        placeholderTextColor="#888"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f4e1'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111307'
  },
  input: {
    height: 40,
    borderColor: '#b0da95',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 10,
    color: '#111307'
  },
  messageInput: {
    height: 80,
    paddingTop: 10
  },
  button: {
    backgroundColor: '#359740',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#f2f4e1',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ContactUsScreen
