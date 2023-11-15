// HomeScreen.js
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeScreen = () => {
  const [scaleValue] = useState(new Animated.Value(1))

  const handleCardPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true
    }).start()
  }

  const handleCardPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  const handleCardPress = (cardNumber) => {
    console.log(`Card pressed: ${cardNumber}`)
  }

  const renderCard = (cardNumber) => (
    <TouchableOpacity
      key={cardNumber}
      onPressIn={handleCardPressIn}
      onPressOut={handleCardPressOut}
      onPress={() => handleCardPress(cardNumber)}
    >
      <Animated.View
        style={[styles.card, { transform: [{ scale: scaleValue }] }]}
      >
        <Text style={styles.cardText}>DeviceID {cardNumber}</Text>
      </Animated.View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Header title="Home" />

      <View style={styles.contentContainer}>
        {renderCard('1B345')}
        {renderCard('2C578')}
        {renderCard('3D478')}
        {renderCard('4F980')}
      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  card: {
    width: 150,
    height: 100,
    backgroundColor: '#f9f1be',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3 // For Android shadow
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default HomeScreen
