// src/LoginScreen.js
import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { Input, Button } from 'react-native-elements'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const [emailError, setEmailError] = useState('')
  const [registrationError, setRegistrationError] = useState('')

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
        // Handle successful registration, navigate to the next screen, etc.
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
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* App Logo */}
        <Image source={require('../assets/icon.png')} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome to Your App!</Text>

        {/* Email Input */}
        <Input
          placeholder="Email Address"
          label="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={{ type: 'material', name: 'email' }}
        />

        {emailError ? (
          <Text style={{ color: 'red', fontWeight: 'bold' }}>{emailError}</Text>
        ) : null}

        {registrationError ? (
          <Text style={{ color: 'red' }}>{registrationError}</Text>
        ) : null}

        {/* Password Input */}
        <Input
          placeholder="Password"
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          leftIcon={{ type: 'material', name: 'lock' }}
        />

        {/* Login Button */}
        <Button
          title="Login"
          onPress={handleRegistration}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />

        {/* Registration Link */}
        <Text style={styles.registerLink} onPress={handleRegister}>
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
    padding: 20
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  customButton: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FFD814',
    borderWidth: 1,
    borderColor: '#FCD200',
    fontSize: 13,
    height: 31,
    paddingVertical: 0,
    paddingHorizontal: 11,
    textAlign: 'center',
    width: '100%',
    minWidth: 200
  },
  customButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0F1111'
  },
  registerLink: {
    marginTop: 10,
    color: '#3498db',
    textDecorationLine: 'underline'
  }
})

export default LoginScreen
