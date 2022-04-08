import React from 'react'
import { Pressable } from 'react-native'
import { StyledImage } from './styles'

function Menu() {
  return (
    <Pressable>
      <StyledImage source={require('../../assets/menu.png')} />
    </Pressable>
  )
}

export default Menu
