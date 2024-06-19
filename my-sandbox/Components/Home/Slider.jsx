import { View, Image, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const Slider = () => {
    const SlidesData = [
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODky57SjwEWMdN9d-34r7NsH32QJ6g0vZcA&s" },
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wNCAWiTF5ro01ZHjBIIFMdPE1bwzEXc57w&s" },
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V3H7cK_HL61OLbuIrqf-loGYZMRbpjXwHw&s" },
        { picSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uTBeT-MC4V_xCpwZoEUTMnJ2K4JxLiP6w&s" }
    ]

    const Width = Dimensions.get('window').width
    const RenderItem = ({ item }) => {
        return (
            <View style={styles.Container}>
                <Image source={{ uri: item.picSource }} style={styles.ImageStyle} />
            </View>
        )

    }
    
    return (
        <View style = {{marginBottom : 5 }}>
            <Carousel
                data={SlidesData}
                renderItem={RenderItem}
                width={Width}
                height={Width*0.9}
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
