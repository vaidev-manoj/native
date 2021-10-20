import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './App/components/AppButton';
import AddDetails from './Screens/AddDetails';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LoginScreen1 from './Screens/LoginScreen1';
import Profile from './Screens/Profile';
import RegisterScreen from './Screens/RegisterScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SideScreen from './Screens/SideScreen';
import MyDrawer from './App/Naviagation/Drawer';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen"  >
        <Stack.Screen  name="WelcomScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="signin" component={LoginScreen1} />
         <Stack.Screen name="signup" component={RegisterScreen}  options={{title:"create a account",headerTintColor: '#fff', 
         headerStyle:{backgroundColor:"#2C78E4"}}}/>
         <Stack.Screen name="AddDetails" component={AddDetails}  options={{title:"Add details",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}}}/>
        <Stack.Screen  name="Profile" component={MyDrawer}  options={{title:"Profile",headerTintColor: '#fff',headerStyle:{backgroundColor:"#2C78E4"}} } />
      </Stack.Navigator>
    </NavigationContainer>
    // <SideScreen></SideScreen>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
 flex:1,

  },
});

// In App.js in a new project
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
