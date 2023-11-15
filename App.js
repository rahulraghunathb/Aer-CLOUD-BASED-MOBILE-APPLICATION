import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import AddDeviceScreen from './src/screens/AddDeviceScreen'
import ContactUsScreen from './src/screens/ContactUsScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddDevice">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
