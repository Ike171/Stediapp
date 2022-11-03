
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView , Share, ScrollView, Button} from 'react-native';
import { Card, CardTitle, CardContent} from 'react-native-material-cards';
import BarChart from 'react-native-bar-chart';
// import Share from 'react-native-share';



// const data = [
//   [70, 0],
//   [80,0],
//   [110, 0],
//   [100, 0],
//   [280, 0],
//   [80,0 ],
//   [110, 0]

// ];
// labels
// const horizontalData = ['S', 'M', 'T', 'W', 'T', 'F','S'];

const Profile = (props) => {
  const myCustomerShare = async() =>{
    const shareOptions = {
      message: 'This is a test'
    }
    try{
      const shareResponse = await Share.share(shareOptions)
      console.log(shareResponse);
      }
      catch(error){
  console.log('Error', error)
      }
    }

  return (
    <SafeAreaView style={{flex: 1}}>
         <Card style={{backgroundColor:'#A71930', borderRadius: 10, margin:20 ,width: 320, shadowColor: "#EE4B2B",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4}}>
     <CardContent>
     <Image style={{height: 250, width:250, borderRadius: 75}}
      source={require('../image/ATL.jpg')} />
    <Text style={{marginTop:10,marginBottom:10,fontWeight: 'bold'}}>Isaac Frankman</Text>

    <Text style={{marginTop:20,marginBottom:2}}>Isaac is the Goat</Text>
{/* <BarChart barColor='green' data={data} horizontalData={horizontalData} /> */}
     <View style={{ marginTop: 50 }}>
      <Button onPress={myCustomerShare} title="Share" />
    </View>
    </CardContent>
    </Card>
 </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  }
})
