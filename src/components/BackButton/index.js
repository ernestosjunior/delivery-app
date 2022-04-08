import React from 'react'
import { Pressable, Image } from 'react-native'
import { StyledContainer } from './styles'

function BackButton({ onClick }) {
  return (
    <Pressable onPress={onClick}>
      <StyledContainer>
        <Image source={require('../../assets/leftArrow.png')} />
      </StyledContainer>
    </Pressable>
  )
}

export default BackButton
