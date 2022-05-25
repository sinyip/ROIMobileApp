import React from 'react'
import {View,Text,Button, Image} from 'react-native'; 
import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const Home = ({navigation}) => {
   return(
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/wdDP7PD/ROI-COLOR.png' }}
        style={styles.logo}  />
        <Text style={styles.text}>
        <Button onPress = {()=> navigation.navigate('Index')} title="Staff Contact Dictory"></Button>
        </Text>
        <Text style={styles.text1}>
        <Button onPress = {()=> navigation.navigate('Intranet')} title="Staff Intranet Page"></Button>
      </Text>
        </View> 
                
        )
}

  
export default Home

const styles = StyleSheet.create({

  container:{flex:1, justifyContent:'center', alignItems:'center'},

  logo:{alignItems: 'center', 
    width: 200, 
    height: 100,
    padding:5,
    paddingTop:50,
    paddingBottom:50,
    margin:5,
  },

  text:{
    backgroundColor:'#c64c38',
    width: 200, 
    height: 50,
    padding:10,
    paddingBottom:30,
    margin: 50,
  },
  text1:{
  backgroundColor:'#c64c38',
  width: 200, 
  height: 30,
  padding:20,
  paddingTop:10,
  paddingBottom:35,
  margin: 50,

  }

   
}
)

