import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "../src/components/Home.js";
import SignIn from "../src/components/SignIn.js";
import SignUp from "../src/components/SignUp.js";


const headerStyle = {
    backgroundColor: "black",
};
const headerTitleStyle = {
    color: "white",
}



const screens = {

    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home", 
            headerStyle,
            headerTitleStyle,
            
        }
    },
    SignIn: {
        screen: SignIn,
         navigationOptions: {
            title: "SignIn",
            headerStyle,
            headerTitleStyle,

        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "SignUp",
            headerStyle,
            headerTitleStyle,

        }
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);