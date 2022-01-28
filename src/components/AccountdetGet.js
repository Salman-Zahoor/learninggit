import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
        } from "react-native";
import firebase from "firebase";
import { globaltextcolor, vh, vw } from "../constants/index";

const GetAccount=(props)=>{

    useEffect(()=>{
        getDetails()

    },[]);

    // Stetes
const[userAccount,setUserAccount]=useState([])




// Get user account fnc
const getDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`AccountDetails/${id}`)
    .on("value",snapshot=>{
        // console.log(snapshot.val(),"PROOOOO");
        let data=snapshot.val() ?snapshot.val() : {}
        setUserAccount(data)
    })

}

return(
    <ScrollView style={styles.mainvie}>

{/* Profile */}
<View style={styles.headingview}>
        <Text style={styles.heading}>
        Bank Details
        </Text>
    </View>


    <View style={styles.textview}>
        <Text style={styles.text}>
            Bank Name: {userAccount.bankName}</Text>
    </View>

    <View style={styles.textview}>
        <Text style={styles.text}>
            Account Title: {userAccount.accounTitle}</Text>
    </View>

    <View style={styles.textview}>
        <Text style={styles.text}>
            Iban No:{userAccount.ibanNo}</Text>
    </View>

    </ScrollView>
)
}
const styles=StyleSheet.create({
    mainvie:{
        flex:1,
        backgroundColor:"black"
    },
    textview:{
        marginLeft:vw*0.05,
        marginVertical:vh*0.01,
        borderBottomWidth:1,
        borderBottomColor:"#ffcc66"

    },
    headingview:{
        alignItems:"center",
        marginTop:vh*0.02

    },
    heading:{
        fontSize:30,
        color:"#ffcc66"
    },
    text:{
        color:"#ffcc66",
        fontSize:19,
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
    buttontxt:{
    color:"black",
    fontSize:20,
    justifyContent:"center",
    textAlign:"center"
    },
cartstyle:{
    flex:1,
    marginTop:10,
    marginHorizontal:20,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"#ffcc66",
    flexDirection:"row"
},
textstyle:{
    color:"black",
    fontSize:16,
    marginLeft:10,
    fontWeight:"bold",
    marginVertical:2
},
imagestyle:{
    height:100,
    width:100,
    marginTop:10,
    marginLeft:10,
    borderRadius:10
},
detailstyle:{
    flex:1,
    flexDirection:"column",
    paddingVertical:10,   
},
dlt:{
    alignItems:"flex-end",
    justifyContent:"center",
    },
dltext:{
    color:"red",
    marginRight:vw*0.02
}    
    
});
export default GetAccount 