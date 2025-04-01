import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
const logoImg = require('./assets/Card.png');
import profile from'./assets/profile.png';
import search from'./assets/search.png';

export default function HomeScreen(){
    return (
      <View style={styles. container}>
        <ScrollView>
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
            </ScrollView>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop:30,
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


    
  } 
  )

