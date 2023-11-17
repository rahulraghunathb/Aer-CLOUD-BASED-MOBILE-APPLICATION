import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Full Name"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          placeholderTextColor="#888"
          multiline
          numberOfLines={5}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4e1',
    marginTop: 30
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    marginTop: 100
  },
  title: {
    fontSize: 28,
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
    backgroundColor: '#fff',
    color: '#111307',
    marginBottom: 20
  },
  messageInput: {
    height: 100,
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
