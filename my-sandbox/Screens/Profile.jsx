import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOutAction } from '../src/actions'

const Profile = () => {
  // const [isSignedIn, setIsSignedIn] = useState(true)
  // const [userName, setUserName] = useState('mustafa')
  const isSignedIn = useSelector(state=> state.userData.isSignedIn)
  const userName = useSelector(state=>state.userData.userName)
  const dispatch = useDispatch()
  return (
    <View style = {styles.container}>
      {
        isSignedIn ? (
          <View>
            <Text>you are signed in {userName}</Text>
            <TouchableOpacity onPress={()=> dispatch(LogOutAction())}>
              <Text>log out </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>you are logged out </Text>
          </View>
        )
      }
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})