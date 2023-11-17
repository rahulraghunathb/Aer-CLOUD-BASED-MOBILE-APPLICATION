// HomeScreen.js
import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TextInput,
  Alert
} from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeScreen = () => {
  const [scaleValue] = useState(new Animated.Value(1))
  const [searchText, setSearchText] = useState('')
  const [filteredCards, setFilteredCards] = useState([])
  const cards = [
    '1B345',
    '2C578',
    '3D478',
    '4F980',
    '5P345',
    '6L578',
    '7G478',
    '8F080'
  ]

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
    Alert.alert('Card Pressed', `Card pressed: ${cardNumber}`)
  }

  // Corrected handleSearch function
  const handleSearch = () => {
    const filtered = cards.filter((card) =>
      card.includes(searchText.toUpperCase())
    )
    setFilteredCards(filtered)
  }

  // Changed to renderCards based on searchText
  const renderCards = () => {
    const cardsToRender = searchText ? filteredCards : cards
    return cardsToRender.map((cardNumber) => renderCard(cardNumber))
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
      <Header />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Device ID"
          value={searchText}
          onChangeText={(text) => setSearchText(text.toUpperCase())}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>{renderCards()}</View>

      <Footer activeOption="home-outline" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 10,
    marginHorizontal: 13
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#3B7C0F',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    paddingLeft: 10,
    color: '#111307'
  },
  searchButton: {
    backgroundColor: '#359740',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  searchButtonText: {
    color: '#f2f4e1',
    fontSize: 16,
    fontWeight: 'bold'
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
    backgroundColor: '#DEDCED',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default HomeScreen
