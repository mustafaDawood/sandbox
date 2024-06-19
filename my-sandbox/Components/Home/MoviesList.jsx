import { View, Image, Dimensions, FlatList, StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Width = Dimensions.get('window')


const MoviesList = ({ rowTitle , data }) => {

    const navigation = useNavigation()
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
    const Movies = [
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODky57SjwEWMdN9d-34r7NsH32QJ6g0vZcA&s" },
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wNCAWiTF5ro01ZHjBIIFMdPE1bwzEXc57w&s" },
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V3H7cK_HL61OLbuIrqf-loGYZMRbpjXwHw&s" },
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uTBeT-MC4V_xCpwZoEUTMnJ2K4JxLiP6w&s" }
    ]

    const HandleSeeAll = (title) =>  {
        navigation.navigate('SeeAll' , {title : rowTitle , movie : Movies})
    }
    return (
        <View>

            <View style={styles.TitleConatiner} >
                <Text style={styles.Title}>{rowTitle}</Text>
                <Pressable onPress={()=>HandleSeeAll({rowTitle})}>
                    <Text>See All</Text>
                </Pressable>
            </View>

            <FlatList
                data={data}
                ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
                horizontal={true}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.Listcontainer} onPress={() => navigation.navigate('MovieScreen', {movie : item} )}>
                        <Image source={{ uri: IMAGE_BASE_URL+item.poster_path}} style={{ width: 130, height: 190, borderRadius: 25 }} />
                    </TouchableOpacity>

                )}
                scrollEnabled
            />

        </View>



    )
}


export default MoviesList

const styles = StyleSheet.create({

    TitleConatiner: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center' ,
        width : "100%",
        height : 35,
        marginTop : 15 ,
        marginBottom : 5
    },
    Title: {
        fontSize: 20,
        fontFamily: 'Bold',
    } ,
    Listcontainer: {
        width: 140,
        height: 190,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    } ,
    MovieTitle : {

    }
})