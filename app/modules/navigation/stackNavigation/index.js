import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../../../views/firstScreen';
import SecondScreen from '../../../views/secondScreen';
import ThirdScreen from '../../../views/thirdScreen';

const StackNav = createStackNavigator();

const StackNavigation = () => (
    <StackNav.Navigator>
        <StackNav.Screen name="First Screen" component={FirstScreen}/>
        <StackNav.Screen name="Second Screen" component={SecondScreen}/>
        <StackNav.Screen name="Third Screen" component={ThirdScreen}/>
    </StackNav.Navigator>
)

export default StackNavigation