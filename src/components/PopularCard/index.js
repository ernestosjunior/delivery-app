import React from 'react'
import { Image, View } from 'react-native'
import StarIcon from 'assets/svgs/starBlack.svg'
import AddIcon from 'assets/svgs/addBlack.svg'
import Crown from 'assets/svgs/crown.svg'
import {
  Container,
  Footer,
  Button,
  Star,
  TextStar,
  Main,
  Name,
  Weight,
  Left,
  TopText,
} from './styles'

function PopularCard({ name, weight, evaluation, img, onClick }) {
  return (
    <Container onPress={onClick}>
      <Left>
        <Main>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Crown />
            <TopText>top of the week</TopText>
          </View>
          <Name>{name}</Name>
          <Weight>{`Weight ${weight} gr`}</Weight>
        </Main>
        <Footer>
          <Button>
            <AddIcon />
          </Button>
          <Star>
            <StarIcon />
            <TextStar>{evaluation}</TextStar>
          </Star>
        </Footer>
      </Left>
      <Image
        source={{ uri: img }}
        style={{
          flex: 1,
          width: 210,
          height: 125,
          resizeMode: 'stretch',
          marginTop: 14,
        }}
      />
    </Container>
  )
}

export default PopularCard
