import { View, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from "react-native";
import HeaderRow from "../Components/MovieScreen/HeaderRow";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const MovieScreen = ({route}) => {
    const width = Dimensions.get('window').width
    const [isExpanded , setIsExpanded] = useState(false)

    
    const navigation = useNavigation();
    const  {movie} = route.params;

    return (
        <View>

            <View >
                <Image
                    source={require('../assets/images/Poster1.jpg')}
                    style={styles.imageStyle}
                />
                <HeaderRow navigation={navigation.goBack()}/>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.Title}>{movie.original_title}</Text>
                <Text style = {styles.Tags} >tags</Text>
            </View>

            <View style = {styles.RowContainer}>
                <TouchableOpacity style = {styles.ActionContainer} >
                    <Text>play</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.ActionContainer}>
                    <Text>Download</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.descriptionContainer}>
                <Text style = {styles.description} numberOfLines={isExpanded ? undefined : 3}>Nam ac mauris finibus, ultrices nulla sit amet, vulputate erat. Ut risus leo, laoreet hendrerit urna in, venenatis eleifend eros. Pellentesque elementum pulvinar mauris sit amet mollis. Nullam eget tempus orci. Cras blandit dolor vitae nisl porta, in dictum ex euismod. Fusce feugiat, mi iaculis finibus ornare, ante urna dapibus libero, at sagittis lectus magna sed massa. Proin fermentum ipsum sed mattis vestibulum. Suspendisse a tristique lectus. Aenean euismod, libero non tempor vestibulum, dui risus ornare tortor, mollis sodales urna quam in nisi. Maecenas feugiat mauris id mi laoreet mollis. Suspendisse id nibh vel ante semper tempus a et justo. Donec tincidunt magna ligula, id ullamcorper ex commodo sit amet. Aliquam sit amet eros diam. Aenean semper posuere pellentesque. Morbi semper sodales luctus. Duis sit amet turpis nisi..</Text>
                <TouchableOpacity onPress={()=> setIsExpanded(!isExpanded)}>
                    <Text style = {styles.readMoreText}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MovieScreen


const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
    titleContainer: {
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    Title: {
        fontFamily: 'Bold',
        fontSize : 20 ,
    } ,
    Tags : {
        fontFamily : 'Regular',
        fontSize : 15
    } ,
    RowContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        marginTop : 20
    } ,
    ActionContainer : {
        width : 150 ,
        height : 30 ,
        borderRadius : 20 ,
        backgroundColor : 'blue' ,
        justifyContent : 'center',
        alignItems : 'center'
    } , 
    descriptionContainer : {
        width : '100%',
        height : 100,
        paddingHorizontal : 10 , 
        marginTop : 10

    } ,
    description : {
        fontFamily : 'Regular',
        fontSize : 15 ,
        textAlign : 'center',
    } ,
    readMoreText: {
        color: 'blue',
        marginTop: 5,
        fontSize: 14,
      }
})