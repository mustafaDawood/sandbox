import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style = {styles.container}>
      <Text>Welcome</Text>
      <View style ={styles.usernameContainer}>
      <Text style = {{marginBottom : 5}}>user name</Text>
      <TextInput  style ={styles.unTxtInput} placeholder='Enter your user name' placeholderTextColor={'gray'}/>
      </View>
      <View style = {styles.passwordContainer}>
      <Text style={{marginBottom :5}}>password</Text>
      <TextInput style={styles.psTxtInput} placeholder='Enter your Password' placeholderTextColor={'gray'}/>
      </View>
      <TouchableOpacity style = {styles.loginContainer} onPress={()=>{}}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex :1 ,
        justifyContent : 'center',
        alignItems : 'center'
    } ,
    usernameContainer : {
        width : '100%',
        justifyContent : 'flex-start',
        alignItems : 'stretch',
        marginTop : 30,
        padding : 10
    } ,
    unTxtInput : {
        borderColor : 'black',
        borderRadius : 20 ,
        borderWidth : 1,
        padding : 5
    } ,
    passwordContainer : {
        width : '100%',
        justifyContent : 'flex-start',
        alignItems : 'stretch',
        marginTop : 30,
        padding : 10
    } ,
    psTxtInput : {
        borderColor : 'black',
        borderRadius : 20 ,
        borderWidth : 1,
        padding : 5
    } ,
    loginContainer : {
        width :'70%',
        marginTop : 10,
        backgroundColor : 'blue',
        borderRadius : 25,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center'


    }
})