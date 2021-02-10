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
    const widthPlat = 100
    const heightPlat = 20
    const marginBottomPlat = 100
    const marginLeftPlat = 50

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

    // PLAYER
    const [jump, setJump] = useState(false)
    const [bottomPlayer, setbottomPlayer] = useState(screenHeight / 2);

        // JUPM
        function isJump(isjump) { //fonction isJump avec jump en paramétre 
            if(isjump){
                setbottomPlayer(bottomPlayer => bottomPlayer + gravity+7) 
                setTimeout(function(){ setJump(!jump) }, 900);
            }else{
                setbottomPlayer(bottomPlayer => bottomPlayer - gravity)
            } 
        }

        // Falling
        useEffect(()=>{
            if(bottomPlayer > 0){
                gameTimerPlayer = setInterval(()=>{
                    // appelle de la fonction Jump
                    isJump(jump)
                    // COllISION CHECK
                    if(bottomPlayer - 20 < marginBottomPlat +2 && 
                        bottomPlayer - 20 > marginBottomPlat - 2 && (175 + -x*200) > marginLeftPlat && (175 + -x*200)< marginLeftPlat + widthPlat ){
                        setJump(!jump) // Si la collision est validé jump passe a true 
                    }
                },30)// Toutes les 30 ms 
                return()=> {
                    clearInterval(gameTimerPlayer)
                }
            }
            if(bottomPlayer < 0){
                gameOver()
                setbottomPlayer(screenHeight/2)
            }
        },[bottomPlayer]);


    //PLATFORM


        
    return (
        <View style={styles.gameContainer, { backgroundColor: 'grey', height: screenHeight - screenHeight/3, width: screenWidth, zIndex: 0, display: 'flex', flexDirection: 'column-reverse'}} >  
            <View style={styles.player,{marginLeft : 175 + -x*200, marginBottom: bottomPlayer, position: 'absolute',  backgroundColor: 'pink', height: 20, width: 20, zIndex: 1}}> 
            </View>
            <View style={styles.platform,{ position: 'absolute',  backgroundColor: 'green', height: heightPlat, width: widthPlat, zIndex: 1, marginBottom: marginBottomPlat, marginLeft: marginLeftPlat} }> 
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
  
    },
  });