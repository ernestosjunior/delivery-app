import React from 'react'
import StarIcon from 'assets/svgs/starBlack.svg'
import AddIcon from 'assets/svgs/addBlack.svg'
import { Container, Footer, Button, Star, TextStar, Main } from './styles'

function PopularCard({ name, weight, evaluation, img }) {
  return (
    <Container>
      <Main></Main>
      <Footer>
        <Button>
          <AddIcon />
        </Button>
        <Star>
          <StarIcon />
          <TextStar>{evaluation}</TextStar>
        </Star>
      </Footer>
    </Container>
  )
}

export default PopularCard
