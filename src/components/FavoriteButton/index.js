import React from 'react'
import { Pressable, Image } from 'react-native'
import { StyledContainer } from './styles'
import Star from 'assets/svgs/starWhite.svg'

function FavoriteButton({ onClick }) {
  return (
    <Pressable onPress={onClick}>
      <StyledContainer>
        <Star />
      </StyledContainer>
    </Pressable>
  )
}

export default FavoriteButton
