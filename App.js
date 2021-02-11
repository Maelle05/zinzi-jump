import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Credits from './myComponents/Credits/Credits'
import Game from './myComponents/Game/Game'
import Options from './myComponents/Options/Options'
import Menu from './myComponents/Menu/Menu'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen
            name="Zinzi Jump - Menu"
            component={Menu}
          />

      <Stack.Screen
            name="Game"
            component={Game}
          />

      <Stack.Screen
            name="Options"
            component={Options}
          />

    <Stack.Screen
        name="Credits"
        component={Credits}
      />
 
    </Stack.Navigator>
  </NavigationContainer>

    //  <View style={styles.container}>
    //    <Text style={styles.title} >Zinzi Jump</Text>
    //     <Menu/> 
    //     <Game /> 
    //    <StatusBar style="auto"/>
    //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: 'black',
    height: 765,
    display:'flex',
    alignItems: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
    color: '#FFFFFF'
  }
});
