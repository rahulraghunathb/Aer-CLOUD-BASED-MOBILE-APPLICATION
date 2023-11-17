// Footer.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Footer = ({ activeOption }) => {
  const options = [
    { name: 'phone-portrait', text: 'Add Device' },
    { name: 'home-outline', text: 'Home' },
    { name: 'book-outline', text: 'Blog' },
    { name: 'mail-outline', text: 'Contact Us' }
  ]

  return (
    <View style={styles.footer}>
      {options.map((option, index) => (
        <View key={index} style={styles.footerOption}>
          <Icon
            name={activeOption === option.name ? option.name : `${option.name}`}
            size={20}
            color={activeOption === option.name ? '#ff0000' : '#fff'}
            style={activeOption === option.name ? styles.activeIcon : null}
          />
          <Text
            style={[
              styles.footerText,
              activeOption === option.name ? styles.activeText : null
            ]}
          >
            {option.text}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#111307',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-around'
  },
  footerOption: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerText: {
    color: '#F2F4E1',
    fontSize: 16,
    marginVertical: 2,
    marginLeft: 3
  },
  activeIcon: {
    fontWeight: 'bold'
  },
  activeText: {
    color: '#ff0000',
    fontWeight: 'bold'
  }
})

export default Footer
