import * as React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,ScrollView}from "react-native"
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import firebase from 'firebase';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {vw,vh} from "../../constants"


// camera options
var options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option'
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
 };
 
// sell product function
const Register = () =>{

    let id = firebase.auth().currentUser.uid

    // states 
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[number,setNumber]=useState("")
    const[dob,setDob]=useState("")
    const[cnic,setCnic]=useState("")
    const[proname,setProname]=useState("")
    const[city,setCity]=useState("")
    const[district,setDistrict]=useState("")
    const [image,setImage]=useState(null)

    // record submission to firebase
    const submitRecord = () => {
        firebase.database().ref(`PropertyRegistration/${id}`)
        .push({
            name,
            email,
            number,
            dob,
            cnic,
            proname,
            city,
            district,
            image
        })
        .then(response =>{
            // console.log(response,"RESSSSSSSSSS");
            setName("")
            setEmail("")
            setNumber("")
            setDob("")
            setCnic("")
            setProname("")
            setCity("")
            setDistrict("")
            setImage(null)
        })
        .catch(eror =>{
            console.log(eror,"EERRREERRR");
        }) 
    }

    // image uploader function
    const uploadImage =() =>{
        launchCamera(options, response =>{
            console.log(response.assets[0],"RESSSSSSSSSS");
            const source={
                uri:response.assets[0].uri,
                type:response.assets[0].type,
                name: response.assets[0].fileName
            }
            uploadImageToCloudinary(source)            
        })
    }

const uploadImageToCloudinary=async (file) =>{
    const data = new FormData()
    data.append('file',file)
    data.append("upload_preset","lc31yhqm")
    data.append("cloud_name","ddg5474bs")
    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/ddg5474bs/image/upload",data)
        console.log(res.data,"RESSSSSSSSSSSSSSpppppp");
    } catch (error) {
        console.log(error,"ERRRRORRRR");
    }
}


    return(
        <View style={styles.mainviewstyle}>
            <Header 
            heading="Register Your Property"/>

<ScrollView>

<View style={styles.headingview}>
            <Text style={styles.heading}>
            Personal Details
            </Text></View>

            <View style={styles.inputtext}>
            <TextInput
            placeholder="Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={name}
            onChangeText={(main)=>setName(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Email"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={number}
            onChangeText={(main)=>setNumber(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Date of Birth"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={dob}
            onChangeText={(main)=>setDob(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Cnic"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={cnic}
            onChangeText={(main)=>setCnic(main)}
            />
        </View>

        <View style={styles.headingview}>
            <Text style={styles.heading}>
            Property Details
            </Text></View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Property Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={proname}
            onChangeText={(main)=>setProname(main)}
            />
        </View>
        <View style={styles.inputtext}>
            <TextInput
            placeholder="City"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={city}
            onChangeText={(main)=>setCity(main)}
            />
        </View>
        <View style={styles.inputtext}>
            <TextInput
            placeholder="District"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={district}
            onChangeText={(main)=>setDistrict(main)}
            />
        </View>

        <Image
        source={{uri : `data:image/png;base64,${image}`}}
        style={styles.imagestyle}
        resizeMode="contain"
        />

        <TouchableOpacity 
        onPress={uploadImage}
        style={styles.button}>
            <Text style={styles.buttontxt}>
                Upload Image
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={submitRecord} 
        style={styles.button}
        >
            <Text style={styles.buttontxt}>
                Sell Now
            </Text>
        </TouchableOpacity>
</ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    mainviewstyle:{
        flex:1,
        backgroundColor:"black"
    },
    inputtext:{
            height:40,
            borderBottomWidth:2,
            marginHorizontal:20,
            marginTop:20,
            borderBottomColor:"#ffcc66"
    },
    textstyle:{
         marginLeft:10,
         color:"#ffcc66"
},
button:{
        alignItems:"center",
        backgroundColor:"#ffcc66",
        marginHorizontal:60,
        marginVertical:10,
        borderRadius:50,
        marginTop:30,
        height:40
},
headingview:{
    alignItems:"center",
    marginTop:vh*0.02
},
heading:{
    color:"#ffcc66",
    fontSize:20,
    fontWeight:"bold"
},
buttontxt:{
    color:"black",
    fontSize:20,
    justifyContent:"center",
    textAlign:"center"
},
imagestyle:{
    marginTop:20,
    marginLeft:40,
    height:300,
    width:300,
    borderRadius:10
}
});
export default Register