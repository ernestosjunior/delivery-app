import React from 'react'
import { Pressable } from 'react-native'
import { Container, Title, StyledImage, Button, IconButton } from './styles'
import { useRoot } from 'store'

function CategoryCard({ icon, title, onClick, id }) {
  const { RootState } = useRoot()

  const isSelected = RootState.selectedCategory === id

  return (
    <Pressable onPress={onClick}>
      <Container isSelected={isSelected}>
        <StyledImage
          source={{
            uri: icon,
          }}
        />
        <Title>{title}</Title>
        <Button isSelected={isSelected}>
          <RenderIcon isSelected={isSelected} />
        </Button>
      </Container>
    </Pressable>
  )
}

const RenderIcon = ({ isSelected }) => {
  return isSelected ? (
    <IconButton source={require('../../assets/arrowRightBlack.png')} />
  ) : (
    <IconButton source={require('../../assets/arrowRightWhite.png')} />
  )
}

export default CategoryCard
