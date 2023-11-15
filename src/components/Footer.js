// Footer.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerOption}>
        <Icon name="phone-portrait-outline" size={20} color="#fff" />
        <Text style={styles.footerText}>My Devices</Text>
      </View>
      <View style={styles.footerOption}>
        <Icon name="home" size={20} color="#fff" />
        <Text style={styles.footerText}>Home</Text>
      </View>
      <View style={styles.footerOption}>
        <Icon name="mail-outline" size={20} color="#fff" />
        <Text style={styles.footerText}>Contact Us</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#d5bc15',
    flexDirection: 'row', // Make options horizontal
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-around' // Space the options evenly
  },
  footerOption: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerText: {
    color: '#2a2504',
    fontSize: 16,
    marginVertical: 5,
    marginLeft: 5
  }
})

export default Footer
