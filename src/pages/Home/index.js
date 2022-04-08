import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { HomeHeader, SearchInput, CategoryCard } from 'components'
import {
  PrimaryTitle,
  SecondTitle,
  TitleContainer,
  ListCategory,
  TitleSection,
} from './styles'
import { useRoot } from 'store'
import { categories } from './data'

function Home() {
  const { RootDispatch } = useRoot()

  React.useEffect(() => {
    RootDispatch({
      type: 'setCategory',
      payload: { category: 'pizza' },
    })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />
        <TitleContainer>
          <PrimaryTitle>Food</PrimaryTitle>
          <SecondTitle>Delivery</SecondTitle>
        </TitleContainer>
        <SearchInput />
        <TitleSection>Categories</TitleSection>
        <ListCategory horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(({ icon, title }) => (
            <CategoryCard
              icon={icon}
              title={title}
              onClick={() =>
                RootDispatch({
                  type: 'setCategory',
                  payload: { category: icon },
                })
              }
            />
          ))}
        </ListCategory>
        <TitleSection>Popular</TitleSection>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
