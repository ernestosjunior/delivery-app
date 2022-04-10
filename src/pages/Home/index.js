import React from 'react'
import { SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import { HomeHeader, SearchInput, CategoryCard, PopularCard } from 'components'
import {
  PrimaryTitle,
  SecondTitle,
  TitleContainer,
  ListCategory,
  TitleSection,
  ListPopular,
} from './styles'
import { useRoot } from 'store'
import { useNavigation } from '@react-navigation/native'
import { getCategories, getPopular } from 'services'

function Home() {
  const { RootDispatch, RootState } = useRoot()
  const { navigate } = useNavigation()

  React.useEffect(() => {
    async function fetchCategories() {
      const categories = await getCategories()
      const popular = await getPopular()

      RootDispatch({ type: 'setCategories', payload: { categories } })
      RootDispatch({ type: 'setPopular', payload: { popular } })
    }
    fetchCategories()
    RootDispatch({
      type: 'setCategory',
      payload: { category: 'pizza' },
    })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <TitleContainer>
          <PrimaryTitle>Food</PrimaryTitle>
          <SecondTitle>Delivery</SecondTitle>
        </TitleContainer>
        <SearchInput />
        <TitleSection>Categories</TitleSection>
        <ListCategory horizontal showsHorizontalScrollIndicator={false}>
          {RootState.categories.map(({ icon, title, key }) => (
            <CategoryCard
              id={key}
              icon={icon}
              title={title}
              onClick={() =>
                RootDispatch({
                  type: 'setCategory',
                  payload: { category: key },
                })
              }
            />
          ))}
        </ListCategory>
        <TitleSection>Popular</TitleSection>
        <ListPopular>
          {RootState.popular.map(({ name, evaluation, weight, img }) => (
            <PopularCard
              evaluation={evaluation}
              name={name}
              weight={weight}
              img={img}
              onClick={() => navigate('Details')}
            />
          ))}
        </ListPopular>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
