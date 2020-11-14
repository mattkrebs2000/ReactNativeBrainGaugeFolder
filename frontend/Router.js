import React from "react";
import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentDidMount() {
    isSignedIn()
      .then((res) => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch((err) => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

// import React from 'react';

// import { createAppContainer, StackNavigator, SwitchNavigator } from 'react-navigation';
// import Home from "../src/components/Home.js";
// import SignIn from "../src/components/SignIn.js";
// import SignUp from "../src/components/SignUp.js";
// import Welcome from "../src/components/Welcome.js";

// const headerStyle = {
//     backgroundColor: "black"
// };
// const headerTitleStyle = {
//     color: "white",
// }

// export const SignedOut = createStackNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             title: ,
//             headerStyle,
//             headerTitleStyle,

//         }
//     },
//     SignIn: {
//         screen: SignIn,
//         navigationOptions: {
//             title: "SignIn",
//             headerStyle,
//             headerTitleStyle,

//         }
//     },
//     SignUp: {
//         screen: SignUp,
//         navigationOptions: {
//             title: "SignUp",
//             headerStyle,
//             headerTitleStyle,

//         }
//     }
// })

// export const SignedIn = createStackNavigator({

//     Welcome: {
//         screen: Welcome,
//         navigationOptions: {
//             title: "Welcome",
//             headerStyle,
//             headerTitleStyle,

//         }
//     }
// })

// // export default createAppContainer(HomeStack, WelcomeStack);

// export const createRootNavigator = (signedIn = false) => {
//     return createSwitchNavigator(
//         {
//             SignedIn: {
//                 screen: Welcome
//             },
//             SignedOut: {
//                 screen: Home
//             }
//         },
//         {
//             initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//         }
//     );
// };
