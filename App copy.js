 
import React from 'react'; 
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks'; 
import BienvenidaScreen from './app/screens/BienvenidaScreen';
import SplashScreen from './app/screens/SplashScreen';

export default function App() { 
  console.log(useDimensions());
  console.log(useDeviceOrientation()); 
  return <SplashScreen/>;
}

