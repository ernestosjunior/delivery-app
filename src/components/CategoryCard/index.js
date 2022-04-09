import React from 'react'
import { Pressable } from 'react-native'
import { Container, Title, StyledImage, Button, IconButton } from './styles'
import ArrowBlack from 'assets/svgs/arrowRightBlack.svg'
import ArrowWhite from 'assets/svgs/arrowRightWhite.svg'
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
          <Arrow isSelected={isSelected} />
        </Button>
      </Container>
    </Pressable>
  )
}

const Arrow = ({ isSelected }) => {
  return isSelected ? <ArrowBlack /> : <ArrowWhite />
}

export default CategoryCard
