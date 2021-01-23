import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

function SplashScreen(props) {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>
                Bienvenido a la app
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'green',
        justifyContent:"flex-end",
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    }
})
export default SplashScreen;