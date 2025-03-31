import {View,Image,Text,StyleSheet} from 'react-native';
const logoImg = require('./assets/Card.png');
import profile from './assets/profile.png';
import search from './assets/search.png';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
        <View style={{backgroundColor:'white',top:55}}>
         <Text style={{color:'black',left:86,fontWeight:200}}>Welcome back,</Text>   
         <Text style={{color:'black',top:10,left:90,fontWeight:600,fontSize:18}}>Eric Atsu</Text>  
         </View>
      
          {/* search Image View*/}
          <Image source={search} style={{left:300,top:30}}></Image>
         {/* profile Image View*/}
          <Image source={profile} style={{left:25}}></Image>
          {/* logo Image View*/}
          <Image source={logoImg} style={{left:20,top:20}}></Image>
        

        </View>
        );
        }
    
       const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff'
        }
        });