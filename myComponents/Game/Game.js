import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { GameEngine } from "react-native-game-engine"


export default function Accele() {
    // GLOBALE
    const screenWidth = Dimensions.get('screen').width
    const screenHeight = Dimensions.get('screen').height
    const gravity = 3

    function gameOver(){
        alert('You Lose !')
    }

    // ACCELEROMETRE
    const [data, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
    });
    Accelerometer.setUpdateInterval(16);
    Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    })
    const { x, y, z } = data;

    // PLATFORM

    // PLAYER
    const [bottomPlayer, setbottomPlayer] = useState(screenHeight / 2);
        // Falling - Jump
        useEffect(()=>{
            if(bottomPlayer > 0){
                gameTimer = setInterval(()=>{
                    setbottomPlayer(bottomPlayer => bottomPlayer - gravity)
                },30)// Toutes les 30 ms 

                return()=> {
                    clearInterval(gameTimer)
                }
            }
            if(bottomPlayer == 0){
                gameOver()
            }
        },[bottomPlayer]);
    

    return (
    <View style={styles.gameContainer, {}} >
        <View style={styles.platform, { backgroundColor: 'grey', height: screenHeight - screenHeight/4, width: screenWidth, zIndex: 0, display: 'flex', flexDirection: 'column-reverse'}}>
            <View style={styles.player,{marginLeft : 175 + -x*200, marginBottom: bottomPlayer, position: 'absolute',  backgroundColor: 'pink', height: 20, width: 20, zIndex: 1}}> 

            </View>
        </View>
        <StatusBar style="auto"/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
  
    },
  });
