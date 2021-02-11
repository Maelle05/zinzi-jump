import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


class Menu extends React.Component {


  render(){

    
    return (
    

    
      <View>
  
        <Text>ZINZI JUMP</Text>
              
        <Button
            title="Play"
            onPress={() => {
              this.props.navigation.navigate('Game')
              }
            }
          />
  
  <Button
            title="Options"
            onPress={() =>
              this.props.navigation.navigate('Options')
            }
          />
  
  <Button
            title="Credits"
            onPress={() =>
              this.props.navigation.navigate('Credits')
            }
          />
  
      </View>
    )
  }
}
      
    



export default Menu;