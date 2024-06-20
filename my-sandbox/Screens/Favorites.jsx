import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Favorites = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false)
  // const [userName, setUserName] = useState('mustafa')
  // const isSignedIn = useSelector(state=> state.userData.isSignedIn)
  // const userName = useSelector(state=>state.userData.userName)
  
  return (
    <View style = {styles.container}>
     <Text> FAV </Text>

    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})