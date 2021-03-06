import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Details } from 'pages'

const Stack = createStackNavigator()

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default MainStack
