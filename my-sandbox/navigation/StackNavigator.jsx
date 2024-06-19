import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MovieScreen from '../Screens/MovieScreen';
import SeeAll from '../Screens/SeeAll';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {

    

    return (
        <Stack.Navigator>
            <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='MovieScreen' component={MovieScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SeeAll' component={SeeAll} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}


export default StackNavigator