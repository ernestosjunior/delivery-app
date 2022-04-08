import React from 'react'
import { Pressable } from 'react-native'
import { Container, Title, StyledImage, Button, IconButton } from './styles'
import { useRoot } from 'store'

function CategoryCard({ icon, title, onClick }) {
  const { RootState } = useRoot()

  const isSelected = RootState.selectedCategory === icon

  return (
    <Pressable onPress={onClick}>
      <Container isSelected={isSelected}>
        <RenderImage icon={icon} />
        <Title>{title}</Title>
        <Button isSelected={isSelected}>
          <RenderIcon isSelected={isSelected} />
        </Button>
      </Container>
    </Pressable>
  )
}

const RenderImage = ({ icon }) => {
  if (icon === 'pizza') {
    return <StyledImage source={require('../../assets/icons/pizza.png')} />
  }

  if (icon === 'shrimp') {
    return <StyledImage source={require('../../assets/icons/shrimp.png')} />
  }

  if (icon === 'soda') {
    return <StyledImage source={require('../../assets/icons/soda.png')} />
  }

  if (icon === 'bread') {
    return <StyledImage source={require('../../assets/icons/bread.png')} />
  }

  if (icon === 'iceCreams') {
    return <StyledImage source={require('../../assets/icons/iceCreams.png')} />
  }

  return null
}

const RenderIcon = ({ isSelected }) => {
  return isSelected ? (
    <IconButton source={require('../../assets/arrowRightBlack.png')} />
  ) : (
    <IconButton source={require('../../assets/arrowRightWhite.png')} />
  )
}

export default CategoryCard
