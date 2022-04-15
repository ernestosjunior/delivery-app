import React from 'react'
import {
  Container,
  Left,
  Right,
  ContainerText,
  TextSup,
  Text,
  Image,
} from './styles'

function InfoSection({ size, crust, deliveryIn, img }) {
  return (
    <Container>
      <Left>
        <ContainerText>
          <TextSup>Size</TextSup>
          <Text>{size}</Text>
        </ContainerText>
        <ContainerText>
          <TextSup>Crust</TextSup>
          <Text>{crust}</Text>
        </ContainerText>
        <ContainerText>
          <TextSup>Delivery In</TextSup>
          <Text>{deliveryIn}</Text>
        </ContainerText>
      </Left>
      <Right>
        <Image source={{ uri: img }} resizeMode="contain" />
      </Right>
    </Container>
  )
}

export default InfoSection
