import React from 'react'
import { TextInput } from 'react-native'
import { StyledView, InputContainer } from './styles'
import SearchIcon from 'assets/svgs/search.svg'

function SearchInput({ onChange }) {
  return (
    <StyledView>
      <SearchIcon />
      <InputContainer>
        <TextInput placeholder="Search..." onChangeText={onChange} />
      </InputContainer>
    </StyledView>
  )
}

export default SearchInput
