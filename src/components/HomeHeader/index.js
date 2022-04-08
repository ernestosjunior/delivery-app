import React from 'react'
import { StyledContainer } from './styles'
import { ProfileIcon, Menu } from 'components'

function HomeHeader() {
  return (
    <StyledContainer>
      <ProfileIcon />
      <Menu />
    </StyledContainer>
  )
}

export default HomeHeader
