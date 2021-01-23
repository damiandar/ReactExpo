
import React, { useRef } from 'react';
import { Image, SafeAreaView,StatusBar, Text, TextInput, View,StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

function LoginScreen(props) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView behavior='padding' style={styles.container }>
            <TouchableWithoutFeedback style={styles.container} >
                <View style={styles.logoContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../assets/logo.png')}>
                        </Image>
                        <Text style={styles.title}>Account Information</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <TextInput style={styles.input}
                            placeholder="Enter username/email"
                            placeholderTextColor="rgba(255,255,255,0.8)"
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                            onSubmitEditing={()=>this.txtPassword.focus()}
                        />
         
                        <TextInput style={styles.input}
                            placeholder="Enter PASSWORD"
                            placeholderTextColor="rgba(255,255,255,0.8)" 
                            returnKeyType='go'
                            secureTextEntry={true}
                            autoCorrect={false}
                            ref={(input) => {this.txtPassword=input;}}
                        />
                        <TouchableOpacity style={styles.buttonContaniner}>
                            <Text>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(32,53,70)',
        flexDirection:'column'
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    logo:{
        width:128,
        height:56
    },
    title:{
        color:'#f7c744',
        fontSize:18,
        textAlign:'center',
        marginTop:5,
        opacity:0.9
    },
    infoContainer:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        height:200,
        padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'#FFF',
        marginBottom:20, 
        paddingHorizontal:20
    },
    buttonContaniner:{ 
        backgroundColor:'#f7c744',
        paddingVertical:15
    },
    buttonText:{
        textAlign:'center',
        color:'rgb(32,53,70)',
        fontWeight:'bold',
        fontSize:18
    }
})
export default LoginScreen;