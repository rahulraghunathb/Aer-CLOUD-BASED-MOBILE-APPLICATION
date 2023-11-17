// // Import necessary modules
// import React, { useState } from 'react'
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import { Picker } from '@react-native-picker/picker'
// import Header from '../components/Header'

// // Your image sources (replace with your actual image source)
// const imageSources = {
//   option1: require('../../assets/logoText.png'),
//   option2: require('../../assets/logoMark.png')
//   // Add more options as needed
// }

// const DashboardScreen = () => {
//   const [selectedOption, setSelectedOption] = useState('option1')
//   const [displayedImage, setDisplayedImage] = useState(null)

//   const handleGenerateImage = () => {
//     // Retrieve the image source based on the selected option
//     const selectedImage = imageSources[selectedOption]
//     setDisplayedImage(selectedImage)
//   }

//   return (
//     <View style={styles.container}>
//       <Header />
//       {/* Filter Dropdown */}
//       <Picker
//         selectedValue={selectedOption}
//         onValueChange={(itemValue) => setSelectedOption(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Option 1" value="option1" />
//         <Picker.Item label="Option 2" value="option2" />
//         <Picker.Item label="Option 1sfg" value="option1sfg" />
//         <Picker.Item label="Option 2sfg" value="option2dfg" />
//         <Picker.Item label="Option 1fg" value="option1sdgsd" />
//         <Picker.Item label="Option 2sfg" value="option2dfg" />
//         {/* Add more options as needed */}
//       </Picker>

//       {/* Generate Button */}
//       <TouchableOpacity
//         onPress={handleGenerateImage}
//         style={styles.generateButton}
//       >
//         <Text style={styles.buttonText}>Generate Image</Text>
//       </TouchableOpacity>

//       {/* Display Image */}
//       {displayedImage && (
//         <Image
//           source={displayedImage}
//           style={styles.image}
//           resizeMode="contain"
//         />
//       )}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   picker: {
//     width: 200,
//     height: 40,
//     marginBottom: 20
//   },
//   generateButton: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 8
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20
//   }
// })

// export default Dashboard

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CircularProgress } from 'react-native-circular-progress'

const AQIMeter = ({ aqiValue }) => {
  // Adjust the color based on AQI levels
  const getMeterColor = () => {
    if (aqiValue >= 0 && aqiValue <= 50) {
      return '#2ecc71' // Good
    } else if (aqiValue > 50 && aqiValue <= 100) {
      return '#f39c12' // Moderate
    } else if (aqiValue > 100 && aqiValue <= 150) {
      return '#e74c3c' // Unhealthy for Sensitive Groups
    } else if (aqiValue > 150 && aqiValue <= 200) {
      return '#c0392b' // Unhealthy
    } else if (aqiValue > 200 && aqiValue <= 300) {
      return '#8e44ad' // Very Unhealthy
    } else {
      return '#34495e' // Hazardous
    }
  }

  return (
    <View style={styles.container}>
      <CircularProgress
        size={150}
        width={15}
        fill={(aqiValue / 500) * 100} // Assuming AQI values range from 0 to 500
        tintColor={getMeterColor()}
        backgroundColor="#bdc3c7"
        rotation={0}
        lineCap="round"
      >
        {() => (
          <View style={styles.progressContainer}>
            <Text style={styles.aqiValue}>{aqiValue}</Text>
            <Text style={styles.aqiLabel}>AQI</Text>
          </View>
        )}
      </CircularProgress>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  aqiValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34495e'
  },
  aqiLabel: {
    fontSize: 18,
    color: '#34495e'
  }
})

export default AQIMeter
