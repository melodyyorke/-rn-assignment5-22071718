import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
const logoImg = require('./assets/Card.png');
import profile from'./assets/profile.png';
import search from'./assets/search.png';
import card from'./assets/Card.png';
import send from './assets/send.png';
import recieve from './assets/recieve.png';
import loan from './assets/loan.png';
import topUp from './assets/topUp.png';
import apple from './assets/apple.png';
import spotify from './assets/spotify.png';
import moneyTransfer from './assets/moneyTransfer.png';
import grocery from './assets/grocery.png';

export default function HomeScreen(){
    return (
      <View style={styles. container}>
        <View style={styles.header}>

           {/* profile,View Text,search */} 
           <View style={styles.profileView}>
          <Image source={profile} style={styles.profileImage}/>
        </View>

          <View style={{right:60,gap:7}}>
            <Text style={{fontWeight:200}}> Welcome back, </Text>
            <Text style={styles.mainText}> Eric Atsu</Text>
          </View>

          <View>
            <Image source={search}/>
            <Image style={styles.search}></Image>
             </View>
            </View>
            {/* card Image View*/}
            <Image source={card} style={{top:15}}></Image>

            <View style={styles.cardView}>
              {/* send,recieve,loan,topUp */}
              <View style={styles.sendView}>
                <Image source={send} style={styles.sendImage}></Image>
                <Text style={{right:10,top:10}}>Send</Text>
              </View>
              <View style={styles.recieveView}>
                <Image source={recieve} style={styles.recieveImage}></Image>
                <Text style={{right:20,top:10}}>Recieve</Text>
              </View>
              <View style={styles.loanView}>
                <Image source={loan} style={styles.loanImage}></Image>
                <Text style={{right:30,top:5}}>Loan</Text>
              </View>
              <View style={styles.topUpView}>
                <Image source={topUp} style={styles.topUpImage}></Image>
                <Text style={{right:40,top:5}}>Top Up</Text>
              </View>
               </View>
            
            <View style={{margin:5}}>
            <Text style={{fontWeight:600,top:70}}>Transaction</Text>
            <Text style={{color:'blue',left:250,top:50}}>Sell All</Text>
            </View>

            <View style={styles.cardView2}>
              {/* apple,spotify,moneyTransfer,grocery*/}
              <View style={styles.appleView}>
                <Image source={apple} style={styles.appleImage}></Image>
              </View>
              <View style={styles.spotifyView}>
                <Image source={spotify} style={styles.spotifyImage}></Image>
              </View>
              <View style={styles.moneyTransferView}>
                <Image source={moneyTransfer} style={styles.moneyTransferImage}></Image>
              </View>
              <View style={styles.groceryView}>
                <Image source={grocery} style={styles.groceryImage}></Image>
              </View>
            </View>
          </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop:10,
   paddingLeft:10,
    marginLeft:5,
    marginRight:5
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginRight:10,
      backgroundColor: '#fff',
      alignItems:'center',
      display:'flex'
      },
    
    mainText: {
    fontSize: 18,
    fontWeight: 'bold'
    },
    
    cardView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      top:45,
      backgroundColor: '#fff',
      alignItems:'flex',
      display:'flex'
  
     },
     cardView2: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      top:60,
      backgroundColor: '#fff',
      alignItems:'flex',
      display:'flex',
      width:200,
      height:200
    

    
    }
      

  } 
  )

