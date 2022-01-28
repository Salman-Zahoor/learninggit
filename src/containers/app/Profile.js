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
import { globaltextcolor, vh, vw } from "../../constants";

const Profile=()=>{

    useEffect(()=>{
        getUserDetails()
        getProducts()

    },[]);

    // Stetes
const[userDetails,setuserDetails]=useState({})
const[userProperty,setUserProperty]=useState([])

// User details fetching fnc
const getUserDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`userss/${id}`)
    .on("value",snapshotttt =>{
    //  console.log(id,"IDDDDD");
        // console.log(snapshotttt.val(),"Valuee");
        setuserDetails(snapshotttt.val())
    })
}


// Get user products fnc
const getProducts=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`PropertyRegistration/${id}`)
    .on("value",snapshot=>{
        // console.log(snapshot.val(),"PROOOOO");
        let data=snapshot.val() ?snapshot.val() : {}
        setUserProperty(data)
    })

}

// logout fnc
const logOut=()=>{
    firebase.auth().signOut()
}
// console.log(userProducts,"UseRRRRRRRR");
let keys=Object.keys(userProperty)
// console.log(keys,"KEYYYYYYYY");

// Product deleting fnc
const deleteProperty=(keysss)=>{
let id=firebase.auth().currentUser.uid
firebase.database().ref(`PropertyRegistration/${id}/${keysss}`).remove()
.then(response=>{
    alert("Product Deleted")
})
.catch(err=>{
    alert("Error")
})
}
return(
    <ScrollView style={styles.mainvie}>

{/* Profile */}
<View style={styles.headingview}>
        <Text style={styles.heading}>
        Profile
        </Text>
    </View>


    <View style={styles.textview}>
        <Text style={styles.text}>
            Name: {userDetails.name}</Text>
    </View>

    <View style={styles.textview}>
        <Text style={styles.text}>
            Email: {userDetails.email}</Text>
    </View>

    <View style={styles.textview}>
        <Text style={styles.text}>
            Active Status:{userDetails.isActive}</Text>
    </View>

    <View style={styles.headingview}>
        <Text style={styles.heading}>
            My Product
        </Text>
    </View>

    
    {/* MAPPING */}
 {keys.map((items,index)=>{
    //  console.log(items,"VALUEEEEEEEEE");
    //  console.log(userProducts[items],"FINAL VALUEEEE");
    return(
        // product cart
        <View style={styles.cartstyle}>
<Image source={{ uri:`data:image/png;base64,${userProperty[items].image}`}} style={styles.imagestyle} 
        resizeMode="contain"
        /> 
         <View style={styles.detailstyle}>       
        <Text style={styles.textstyle}>Name:{userProperty[items].name}</Text>
        <Text style={styles.textstyle}>Title:{userProperty[items].proname}</Text>
        <Text style={styles.textstyle}>Price:{userProperty[items].city}</Text>
        <Text style={styles.textstyle}>Address:{userProperty[items].number}</Text>
        </View>
            {/* deleting opt */}
        <View style={styles.dlt}>
        <TouchableOpacity onPress={()=>deleteProperty(items)}>
            <Text style={styles.dltext}>DELETE</Text>
        </TouchableOpacity>
        </View>

        </View>
)  
 })}
        {/* Logout btn */}
    <TouchableOpacity onPress={logOut}
    style={styles.button}>
            <Text style={styles.buttontxt}>
                LogOut
            </Text>
        </TouchableOpacity>
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
export default Profile 