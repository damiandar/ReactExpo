 
import React,{Component} from 'react'; 

import SplashScreen from './app/screens/SplashScreen';
import LoginScreen from './app/screens/LoginScreen';
import BienvenidaScreen from './app/screens/BienvenidaScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen:'Splash' };
    setTimeout(()=>{
      console.log('Done some tasks for about 3 seconds')
      this.setState({currentScreen:'Login'})
    },3000)
  }
  render(){

    const {currentScreen}=this.state;
    console.log("ver que carga" + currentScreen);
    let mainScreen=currentScreen==='Splash' ? <SplashScreen/> : <BienvenidaScreen/>
    return mainScreen
  }
}
export default App;