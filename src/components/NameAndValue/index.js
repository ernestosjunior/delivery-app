import React from 'react'
import { View } from 'react-native'
import { Title, Price } from './styles'

function NameAndValue({ name, price }) {
  return (
    <View>
      <Title>{name}</Title>
      <Price>{`$${price}`}</Price>
    </View>
  )
}

export default NameAndValue
