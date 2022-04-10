import React from 'react'
import { ScrollView, SafeAreaView, Text } from 'react-native'
import { DetailsHeader, NameAndValue } from 'components'
import { useNavigation } from '@react-navigation/native'

function Details({ route }) {
  const { navigate } = useNavigation()
  const { name, price } = route.params.product

  return (
    <SafeAreaView>
      <ScrollView style={{ height: '100%' }}>
        <DetailsHeader
          clickOnBackButton={() => navigate('Home')}
          clickOnFavoriteButton={() => null}
        />
        <NameAndValue name={name} price={price} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Details
