import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




const HeaderRow = ({navigation}) => {

    

    return (
        <View style={styles.Container}>
            <TouchableOpacity style = {styles.CircularConatiner} onPress={() => navigation}>
                <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.CircularConatiner} onPress={()=>{}}>
                <FontAwesome5 name="heart" size={24} color="white" />
            </TouchableOpacity>

        </View>
    )
}

export default HeaderRow

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30 , 
        paddingHorizontal : 10,
        position : 'absolute',
        top : 0 ,
        left : 0 ,
        right : 0 ,
        

    },
    CircularConatiner: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})