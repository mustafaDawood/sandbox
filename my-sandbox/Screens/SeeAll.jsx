import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Width = Dimensions.get('window')

export default function SeeAll({ route }) {
    const navigation = useNavigation()

    const { title, movie } = route.params
    return (
        <SafeAreaView>

            <View style={styles.RowContainer}>
                <TouchableOpacity style={styles.CircularConatiner} onPress={() => navigation.goBack('TabNavigator')}>
                    <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style = {styles.Header}>{title}</Text>
            </View>

            <FlatList
                data={movie}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.Listcontainer} onPress={() => navigation.navigate("MovieScreen")}>
                        <Image source={{ uri: item.picSource }} style={{ width: 110, height: 190, borderRadius: 25 }} />
                    </TouchableOpacity>
                )}
                key={3}
                numColumns={3}
            />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    RowContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom : 10
    },
    Listcontainer: {
        width: Width,
        height: 190,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    CircularConatiner: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart : 5 ,
        marginRight : 85
    } , 
    Header : {
     fontFamily : 'Bold' , 
     fontSize : 20
    }
})