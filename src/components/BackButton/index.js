import React from 'react'
import { Pressable } from 'react-native'
import { StyledContainer } from './styles'
import Arrow from 'assets/svgs/arrowLeftBlack.svg'

function BackButton({ onClick }) {
  return (
    <Pressable onPress={onClick}>
      <StyledContainer>
        <Arrow />
      </StyledContainer>
    </Pressable>
  )
}

export default BackButton
