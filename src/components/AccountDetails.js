import * as React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,ScrollView}from "react-native"
import { useState } from 'react/cjs/react.development';
import firebase from 'firebase';
import {vw,vh} from "../constants/index"


 
// sell product function
const AccountDetails = (props) =>{

    let id = firebase.auth().currentUser.uid

    // states 
    const[bankName,setBankName]=useState("")
    const[accounTitle,setAccountTitle]=useState("")
    const[ibanNo,setIbanNo]=useState("")


    // record submission to firebase
    const submitRecord = () => {
        firebase.database().ref(`AccountDetails/${id}`)
        .set({
            bankName,
            accounTitle,
            ibanNo,
        })
        .then(response =>{
            // console.log(response,"RESSSSSSSSSS");
            setAccountTitle(false)
            setBankName(false)
            setIbanNo(false)
        })
        .catch(eror =>{
            console.log(eror,"EERRREERRR");
        }) 
    }



    return(
        <View style={styles.mainviewstyle}>

<ScrollView>



        <View style={styles.headingview}>
            <Text style={styles.heading}>
            Enter Account  Details
            </Text></View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Bank Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={bankName}
            onChangeText={(main)=>setBankName(main)}
            />
        </View>
        <View style={styles.inputtext}>
            <TextInput
            placeholder="Account Title"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={accounTitle}
            onChangeText={(main)=>setAccountTitle(main)}
            />
        </View>
        <View style={styles.inputtext}>
            <TextInput
            placeholder="IBAN NO"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={ibanNo}
            onChangeText={(main)=>setIbanNo(main)}
            />
        </View>

        <TouchableOpacity onPress={submitRecord} 
        style={styles.button}
        >
            <Text style={styles.buttontxt}>
                Submit
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
export default AccountDetails