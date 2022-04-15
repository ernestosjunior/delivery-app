import React from 'react'
import { ScrollView, SafeAreaView, Text } from 'react-native'
import { DetailsHeader, NameAndValue, InfoSection } from 'components'
import { useNavigation } from '@react-navigation/native'

function Details({ route }) {
  const { navigate } = useNavigation()
  const { name, price, size, crust, deliveryIn, img } = route.params.product

  return (
    <SafeAreaView>
      <ScrollView style={{ height: '100%' }}>
        <DetailsHeader
          clickOnBackButton={() => navigate('Home')}
          clickOnFavoriteButton={() => null}
        />
        <NameAndValue name={name} price={price} />
        <InfoSection
          size={size}
          crust={crust}
          deliveryIn={deliveryIn}
          img={img}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Details
