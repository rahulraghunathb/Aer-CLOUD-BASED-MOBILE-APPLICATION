import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const AddDeviceScreen = () => {
  const [scannerResult, setScannerResult] = useState('Scan a QR code')

  // Add your QR code scanning logic here

  const handleAddDevice = () => {
    // Add logic for "Add Device" button click
  }

  const handleRetake = () => {
    // Add logic for "Retake" button click
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <View style={styles.scannerIcon}></View>
        <Text style={styles.scannerResultText}>{scannerResult}</Text>
      </View>
      <Image
        source={require('../../assets/qrcde.png')}
        style={styles.iconImage}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3498db' }]}
          onPress={handleAddDevice}
        >
          <Text style={styles.buttonText}>Add Device</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#e74c3c' }]}
          onPress={handleRetake}
        >
          <Text style={styles.buttonText}>Retake</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4'
  },
  scannerContainer: {
    width: '80%',
    maxWidth: 400,
    marginBottom: 20,
    alignItems: 'center'
  },
  scannerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  iconImage: {
    width: 200,
    height: 200,
    tintColor: '#2F1712',
    marginBottom: 40
  },
  scannerResultText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingHorizontal: 10
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
})

export default AddDeviceScreen
