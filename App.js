import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import RootProvider from './src/store/contexts/RootContext'

function App() {
  return (
    <RootProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </RootProvider>
  )
}

export default App
