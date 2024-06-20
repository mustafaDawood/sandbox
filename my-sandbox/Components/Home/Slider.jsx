import { View, Image, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUpComingMovies } from "../../src/upComingSlice";

const Slider = () => {

    const upComingMovies = useSelector((state)=>state.upComingMovies.upComingMovies)
    const dispatch = useDispatch()
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
        dispatch(fetchUpComingMovies())
    },[dispatch])

    const Width = Dimensions.get('window').width
    const RenderItem = ({ item }) => {
        return (
            <View style={styles.Container}>
                <Image source={{ uri: IMAGE_BASE_URL+item.poster_path }} style={styles.ImageStyle} />
            </View>
        )

    }
    
    return (
        <View style = {{marginBottom : 5 }}>
            <Carousel
                data={upComingMovies}
                renderItem={RenderItem}
                width={Width}
                height={Width*1.1}
                loop = {true}
                autoplay = {true}
                scrollAnimationDuration={10}
                autoPlayInterval={30}
                
            />
        </View>

    )
}

export default Slider

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow : 'visible'
    },
    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode : 'cover',
        
        
        
        
    }
})
