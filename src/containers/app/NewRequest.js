import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh} from "../../constants"

const NewRequest=()=>{

    useEffect(()=>{
        getUserDetails()

    },[]);

    // Stetes
    const[userDetails,setuserDetails]=useState({})

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

    
    // console.log("NAMEEE==>",name);
    return(
        <View style={styles.mainview}>

<View style={styles.textview}>
        <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>

    </View>


        <View style={styles.innerview}
  >




            
        </View>

        </View>
    )
}

const styles=StyleSheet.create({
    buttonstyle:{
        alignItems:"center",
        backgroundColor:"#ffcc66",
        marginHorizontal:40,
        marginVertical:10,
        borderRadius:10,
        marginTop:30,

},
signuptxt:{
    color:"black",
    fontSize:25
},
nametxt:{
    color:"#ffcc66",
    fontSize:25
},
imagess:{
    alignItems:"center",
    marginTop:vh*0.08,
},
imgstyle:{
    height:vh*0.25,
    width:vw*0.90
},

mainview:{
    flex:1,
    backgroundColor:"black",
},
innerview:{
    justifyContent:"center",
    flex:1,
    marginBottom:vh*0.15
},
textview:{
    marginStart:vw*0.10,
    marginTop:vh*0.05
},

inputtxt:{
    marginLeft:10,
    color:"#ffcc66"
}
});

export default NewRequest