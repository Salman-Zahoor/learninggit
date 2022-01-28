import React,{useEffect} from 'react';
import { View,StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useState } from 'react';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   width:null,
   flex:1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


export default () => {

  const[location,setLocation]=useState({})

useEffect(()=>{
  Geolocation.getCurrentPosition(info=>setLocation(info.coords));

},[])

console.log(location,"Locationn");
return(
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       showsUserLocation={true}
       region={{
         latitude: location?.latitude,
         longitude: location?.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       <Marker
        coordinate={{
          latitude: location?.latitude,
         longitude: location?.longitude,
        }}
       />
     </MapView>
   </View>
)
}