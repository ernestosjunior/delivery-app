import React from 'react'
import { TextInput, Image } from 'react-native'
import { StyledView, InputContainer } from './styles'

function SearchInput({ onChange }) {
  return (
    <StyledView>
      <Image source={require('../../assets/search.png')} />
      <InputContainer>
        <TextInput placeholder="Search..." onChangeText={onChange} />
      </InputContainer>
    </StyledView>
  )
}

export default SearchInput
