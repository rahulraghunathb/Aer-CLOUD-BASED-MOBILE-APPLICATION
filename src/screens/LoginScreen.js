// src/LoginScreen.js
import React, { useReducer, useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable
} from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const [emailError, setEmailError] = useState('')
  const [registrationError, setRegistrationError] = useState('')
  const navigation = useNavigation()

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleRegistration = async () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address')
      setRegistrationError('')
      return
    }

    // Clear any previous email error and registration error
    setEmailError('')
    setRegistrationError('')

    try {
      const response = await fetch('http://10.145.71.244:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data) // Log the server response

        // Navigate to HomeScreen on successful registration
        // navigation.navigate('Home')
      } else {
        console.error('Registration failed:', response.status)
        if (response.status === 400) {
          setRegistrationError('Email is already in use')
        }
      }
    } catch (error) {
      console.error('Error during registration:', error)
      setRegistrationError('Failed to register user')
    }
  }

  const handleRegister = () => {
    // Add your registration navigation logic here
    console.log('Navigate to registration screen')
    // const navigation = useNavigation()
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* App Logo */}
        <Image
          source={require('../../assets/logoText.png')}
          style={styles.logo}
        />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Login into the App!!!</Text>

        {/* Email Input */}
        <Input
          placeholder="Email Address"
          label="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={{ type: 'material', name: 'email' }}
          inputStyle={styles.input}
        />

        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {registrationError ? (
          <Text style={styles.errorText}>{registrationError}</Text>
        ) : null}

        {/* Password Input */}
        <Input
          placeholder="Password"
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          leftIcon={{ type: 'material', name: 'lock' }}
          inputStyle={styles.input}
        />

        {/* Login Button */}
        <Button
          title="Login"
          onPress={handleRegistration}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />

        {/* Registration Link */}
        {/* <Text style={styles.registerLink} onPress={handleRegister}> */}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register')}
        >
          Don't have an account? Register here
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF' // Background color
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain'
    // marginBottom: 20
  },
  welcomeText: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  input: {
    color: '#111307' // Text color
  },
  customButton: {
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#359740', // Button background color
    borderWidth: 1,
    borderColor: '#f2f4e1', // Button border color
    fontSize: 13,
    height: 45,
    paddingVertical: 0,
    paddingHorizontal: 11,
    textAlign: 'center',
    width: '100%',
    minWidth: 300
  },
  customButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#f2f4e1' // Button text color
  },
  registerLink: {
    marginTop: 10,
    color: '#3498db',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  errorText: {
    color: '#ff0000',
    fontWeight: 'bold'
  }
})

export default LoginScreen
