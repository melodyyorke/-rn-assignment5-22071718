import {View,Text,Image,StyleSheet,ScrollView, Button, ImageBackground,} from 'react-native';
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
import home from './assets/home.png';
import myCards from './assets/myCards.png';
import statictics from './assets/statictics.png';
import settings from './assets/settings.png';

export default function HomeScreen(){
    return (
      <ScrollView>
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
          <View style={{borderRadius:20,backgroundColor:'lightgrey',width:40,height:40,alignItems:'center',justifyContent:'center'}}>
            <Image source={search}/>
            <Image style={styles.search}></Image>
             </View>
            </View>
            {/* card Image View*/}
            <Image source={card} style={{top:25,marginLeft:5,marginRight:15}}></Image>

            <View style={styles.cardView}>
              {/* send,recieve,loan,topUp,View Text */}
              <View style={{borderRadius:20,backgroundColor:'lightgrey',width:40,height:40,alignItems:'center',justifyContent:'center',right:16}}>
                <Image source={send} style={styles.sendImage}></Image> 
               </View>
                
               
              <View style={{borderRadius:20,backgroundColor:'lightgrey',width:40,height:40,alignItems:'center',justifyContent:'center',right:10}}>
                <Image source={recieve} style={styles.recieveImage}></Image>
              </View>
              <View style={{borderRadius:20,backgroundColor:'lightgrey',width:40,height:40,alignItems:'center',justifyContent:'center'}}>
                <Image source={loan} style={styles.loanImage}></Image>
        
              </View>
              <View style={{borderRadius:20,backgroundColor:'lightgrey',width:40,height:40,alignItems:'center',justifyContent:'center'}}>
                <Image source={topUp} style={styles.topUpImage}></Image>
               </View>
               </View>
               
               <View>
                  <Text style={{top:55,margin:5}}>
                    <View>
               <Text style={{left:6}}>Sent</Text>
               </View>
               <View>
               <Text style={{left:62}}>Receive</Text>
               </View>
               <View>
               <Text style={{left:120}}>Loan</Text>
               </View>
               <View>
               <Text style={{left:165}}>TopUp</Text>
               </View>
               </Text>
                </View>

                <View>
                  <Text style={{top:70,marginLeft:5}}>
                    <Text style={{fontWeight:600,fontSize:20,left:150}}>Transaction</Text>
                    <View>
                    <Text style={{color:'blue',left:170}}>Sell All</Text>
                    </View>
                   
                  </Text>
                </View>
              

              {/* apple*/}
              <Text style={{left:60,fontSize:20,fontWeight:500,top:80}}>Apple Store</Text>
              <Text style={{left:275,fontSize:15,fontWeight:700,top:60}}>-$5,99</Text>
              <Text style={{left:60,top:63,fontWeight:200}}>Entertainment</Text>
              <View style={{borderRadius:30,backgroundColor:'lightgrey',width:45,height:45,alignItems:'center',justifyContent:'center',top:20}}>
              <Image source={apple} style={styles.appleImage}></Image>
                 </View>

              {/*spotify*/}
              <Text style={{left:60,fontSize:20,fontWeight:500,top:60}}>Sportify</Text>
              <Text style={{left:270,fontSize:15,fontWeight:700,top:40}}>-$12,99</Text>
              <Text style={{left:60,top:43,fontWeight:200}}>Music</Text>
              <View style={{borderRadius:30,backgroundColor:'lightgrey',width:45,height:45,alignItems:'center',justifyContent:'center',top:5}}>
              <Image source={spotify} style={styles.spotifyImage}></Image>
                 </View>

               {/*moneyTransfer*/}
               <Text style={{left:60,fontSize:20,fontWeight:500,top:60}}>Money Transfer</Text>
              <Text style={{left:290,fontSize:15,fontWeight:700,top:40,color:'blue'}}>$300</Text>
              <Text style={{left:60,top:43,fontWeight:200}}>Music</Text>
              <View style={{borderRadius:30,backgroundColor:'lightgrey',width:45,height:45,alignItems:'center',justifyContent:'center'}}>
              <Image source={moneyTransfer} style={styles.moneyTransfer}></Image>
                 </View>

              
               {/*grocery*/}
               <Text style={{left:60,fontSize:20,fontWeight:500,top:45}}>Grocery</Text>
              <Text style={{left:290,fontSize:15,fontWeight:700,top:25}}>-$88</Text>
              <View style={{borderRadius:30,backgroundColor:'lightgrey',width:45,height:45,alignItems:'center',justifyContent:'center'}}>
              <Image source={grocery} style={styles.groceryImage}></Image>
                 </View>

                 <View style= {styles.cardView2}>
                  {/* home,myCard,statictics,settings*/}
                  <View>
                    <Image source={home} style={styles.homeImage}></Image>
                    <Text style={{right:10,top:15,color:'blue'}}>Home</Text>
                    </View>
                    <View>
                      <Image source={myCards} style={styles.myCardsImage}></Image>
                      <Text style={{right:15,top:15}}>My Cards</Text>
                      </View>
                      <View>
                        <Image source={statictics} style={styles.staticticsImage}></Image>
                        <Text style={{right:20,top:15}}>Statistics</Text>
                        </View>
                        <View>
                          <Image source={settings} style={styles.settingsImage}></Image>
                          <Text style={{right:15,top:15,color:'blue'}}>Settings</Text>
                          
                          </View>
                        
                              
 </View>               
                   
  </View>  
  </ScrollView>                  
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop:50,
   paddingLeft:10
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
      headerText: {
        fontSize: 20,
        fontWeight:600,
        marginLeft:5,
        marginRight:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:40,
        left:120
        },
    
    
    mainText: {
    fontSize: 18,
    fontWeight: 'bold'
    },
    
    cardView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      top:50,
      display:'flex',
      marginRight:15,
      marginLeft:5
    
  
     },

     cardView2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      display:'flex',


     }

    
    
  } 
  )

