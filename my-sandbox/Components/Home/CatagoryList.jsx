import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CatagoryList = () => {
    const catagory = [
        { name: "Sci-fi" },
        { name: "Action" },
        { name: "Comedy" },
        { name: "Romantic" },
        { name: "Family" },

    ]
    const navigation = useNavigation()
    const handlePress = (catagory) => {
        navigation.navigate('SeeAll', { title: catagory.name})
    }
    return (
        <FlatList
            data={catagory}
            horizontal
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.Category} onPress={()=> handlePress(item)}>
                    <Text style={styles.Cat_Name}>{item.name}</Text>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
            scrollEnabled

        />
    )
}

export default CatagoryList

const styles = StyleSheet.create({
    Category: {
        width: 90,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Cat_Name: {
        fontFamily: 'Regular',
        fontSize: 15,

    },


})