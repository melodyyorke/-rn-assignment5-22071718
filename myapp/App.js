import {View,Image,Text,StyleSheet} from 'react-native';
const logoImg = require('./assets/Card.png');
import profile from './assets/profile.png';
import search from './assets/search.png';
import send from './assets/send.png';
import recieve from './assets/recieve.png';
import loan from './assets/loan.png';
import topUp from './assets/topUp.png';

export default function HomeScreen(){
    return (
      <View style= {styles.HomeScreen}>
        <View style={{backgroundColor:'white'}}>
         <Text style={{color:'black',left:86,fontWeight:200,top:30}}>Welcome back,</Text>   
         <Text style={{color:'black',top:30,left:90,fontWeight:600,fontSize:18}}>Eric Atsu</Text>  
        
        {/* profile Image View*/}
        <Image source={profile} style={{left:25}}></Image>
         
          {/* search Image View*/}
          <Image source={search} style={{left:300}}></Image>

          {/* logo Image View*/}
          <Image source={logoImg} style={{left:20}}></Image>
  
           <View>
          {/* send Image View*/}
          <Image source={send} style={{left:40,top:65}}></Image>
          <Text style={{left:33,top:75}}>Sent</Text>
          </View>
         
          <View>
            {/* recieve Image View*/}
            <Image source={recieve} style={{left:123,top:30}}></Image> 
            <Text style ={{left:110,top:40}}>Recieve</Text>
          </View>

          <View>
            {/* loan Image View*/}
            <Image source={loan} style={{left:200}}></Image>
            <Text style={{left:200}}>loan</Text>
          </View>

          <View>
            {/* topUp Image View*/}
            <Image source={topUp} style={{left:300}}></Image>
            <Text style={{left:300}}>TopUp</Text>
            </View>
            
            <Text style={{left:30,top:5,fontWeight:600,fontSize:20}}>Transaction</Text>
            <Text style={{left:300,color:'blue'}}>Sell All</Text>
            </View>
            </View>
       
  
        
        );
        }
    
       const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff'
          },
          
              
}
 );

