import React, {useState,useEffect} from 'react';
import { Image, ImageBackground,StyleSheet, View,Text,FlatList,Alert,Pressable } from 'react-native';

function BienvenidaScreen(props) {
    const countriesData = [{"name":"Afghanistan"},{"name":"Åland Islands"},{"name":"Albania"},{"name":"Algeria"}]
    //countriesDataApi es una matriz vacia, 
    //y setCountriesData es una funcion para actualizar el valor de countriesDataAPi
    //Por ejemplo, llamar a setCountriesData ([1,2,3,]) actualizará el valor de countriesData a [1,2,3,].
    //si hay un cambio se renderiza la pantalla
    const [countriesDataApi, setCountriesData] = useState([])
    function fetchCountriesData() {
      fetch('https://restcountries.eu/rest/v2/region/africa?fields=name;capital')
        .then((response) => response.json())
        .then((json) => setCountriesData(json))
        .catch((error) => console.error(error))
    }
    //cualquier código escrito dentro de useEffect se ejecuta cuando se monta el componente.
    useEffect(()=> {
      fetchCountriesData();
    })
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo.png")}/>
                <Text> Vende todo lo que no necesitas</Text>
            </View>
        <FlatList
            data={countriesDataApi}
            contentContainerStyle={styles.container}
            keyExtractor={item => item.name}
            renderItem={({item})=> <Text onPress={() => {Alert.alert(`The Capital of ${item.name} is ${item.capital}`)}} style={styles.text}>{item.name}</Text>}
        />
        <FlatList
            data={countriesData}
            contentContainerStyle={styles.container}
            keyExtractor={item => item.name}
            renderItem={
                ({item})=> 
                    <Text style={styles.text}>{item.name}</Text>
                }
        />

            <View style={styles.loginBoton}></View>
            <View style={styles.registerBoton}></View>
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