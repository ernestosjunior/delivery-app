import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import { DetailsHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'

function Details() {
  const { navigate } = useNavigation()

  return (
    <SafeAreaView>
      <ScrollView>
        <DetailsHeader
          clickOnBackButton={() => navigate('Home')}
          clickOnFavoriteButton={() => null}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Details
