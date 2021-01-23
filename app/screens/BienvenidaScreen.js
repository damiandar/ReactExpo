import React, {useState,useEffect} from 'react';
import { Image, ImageBackground,StyleSheet, View,Text,FlatList,Alert,Pressable } from 'react-native';

function BienvenidaScreen(props) {

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo.png")}/>
                <Text> Vende todo lo que no necesitas</Text>
            </View>

    

            <View style={styles.loginBoton}>
                <Text style={{flex:1,color:'#FFF',fontSize:18}}>Entrar</Text>
            </View>
            <View style={styles.registerBoton}>
                <Text>Registrarse</Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center',
    },
    loginBoton:{
        width:'100%',
        height:70,
        backgroundColor:'#fc4c65',
    },
    registerBoton:{
        width:'100%',
        height:70,
        backgroundColor:'#4ccdc4',
    },
    logo:{
        width:50,
        height:50,
    },
    logoContainer:{ position:"absolute",top:70, alignItems:"center"},
    container:{backgroundColor:'#fcede1', height:50}
})
export default BienvenidaScreen;