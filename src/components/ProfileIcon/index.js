import React from 'react'
import { Pressable } from 'react-native'
import { StyledImg } from './styles'

function ProfileIcon({ img }) {
  return (
    <Pressable>
      <StyledImg source={require('../../assets/profile.png')} />
    </Pressable>
  )
}

export default ProfileIcon
