import React from 'react'
import { StyledContainer } from './styles'
import { BackButton, FavoriteButton } from 'components'

function DetailsHeader({ clickOnBackButton, clickOnFavoriteButton }) {
  return (
    <StyledContainer>
      <BackButton onClick={clickOnBackButton} />
      <FavoriteButton onClick={clickOnFavoriteButton} />
    </StyledContainer>
  )
}

export default DetailsHeader
