
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView , Share, ScrollView, Button, TouchableOpacity} from 'react-native';
import { Card, CardTitle, CardContent} from 'react-native-material-cards';
import BarChart from 'react-native-bar-chart';

// import share from 'react-native-share';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cameraOptions={//               //Added code This line
  quality:0,               //Added code This line
  exif:false               //Added code This line
}//

const Profile = (props) => {
const [userName, setUserName] = useState("");
 const [cameraPermission, setCameraPermission] = useState (false)
 const [profilePhoto, setProfilePhoto] = useState (null)
 const cameraRef = useRef(null);         //This is where the error is i think...
 const [cameraReady, setCameraReady] = useState(false); // added here
useEffect(()=>{
  const getUserName= async()=>{
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPermission);
  const userName = await AsyncStorage.getItem('userName');
  setUserName(userName);
  await AsyncStorage.removeItem('profilePhoto')
  const profilePhoto = await AsyncStorage.getItem('profilePhoto');
  setProfilePhoto(profilePhoto);
  }

  getUserName();
},[]);


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
      if (profilePhoto==null){
        return(
          <View style={styles.container}> 
            <Camera style = {styles.camera} ref={cameraRef} onCameraReady={()=>{setCameraReady(true)}}>                         
              <View style={styles.buttonContainer}>                         
                {cameraReady?<TouchableOpacity style={styles.button} onPress={async ()=>{                         
                                          
                  const picture = await cameraRef.current.takePictureAsync(cameraOptions);                          
                  console.log('Picture', picture);                          
                  await AsyncStorage.setItem('profilePhoto', picture.uri);                          
                  setProfilePhoto(picture.uri);                         
                }}>                           
                  <Text style={styles.text}>Take Picture</Text>                         
                </TouchableOpacity>: null }                           
              </View>                         
          </Camera>                         
                                        
          </View>                         
        )                         
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
//comit
elevation: 4}}>
     <CardContent>
     <Image style={{height: 100, width:100, borderRadius: 75}}
      source={{uri:profilePhoto}} />
    <Text style={{marginTop:10,marginBottom:10,fontWeight: 'bold'}}>{userName}</Text>


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
const styles = StyleSheet.create({                               // edit these lines
  container: {                               // edit these lines
    flex: 1,                               // edit these lines
    justifyContent: 'center',                               // edit these lines
    padding: 20                               // edit these lines
  },                               // edit these lines
  camera: {                               // edit these lines
    flex: 1,                               // edit these lines
  },                               // edit these lines
  buttonContainer: {                               // edit these lines
    flex: 1,                               // edit these lines
    flexDirection: 'row',                               // edit these lines
    backgroundColor: 'transparent',                                //edit these lines
    margin: 64,                                //edit these lines
  },                                //edit these lines
  button: {                                //edit these lines
    flex: 1,                                //edit these lines
    alignSelf: 'flex-end',                                //edit these lines
    alignItems: 'center',                                //edit these lines
  },                                //edit these lines
  text: {                                //edit these lines
    fontSize: 24,                                //edit these lines
    fontWeight: 'bold',                                //edit these lines
    color: 'white',                                //edit these lines
  },                                //edit these lines
});                                //edit these lines
