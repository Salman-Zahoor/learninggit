import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh} from "../../constants"

const AllTanent=(props)=>{

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
             {userDetails.name}'s</Text>
        <Text style={styles.nametxt}>
            AllTanents</Text>

    </View>
    <TouchableOpacity  onPress={()=>props.navigation.navigate("Tnaent1")}>
    <View style={styles.cartstyle}>      
    <View style={styles.detailstyle}>       
        <Text style={styles.textstyle}>Tanent 1 AbdulShakkor</Text>
        </View>
          
     </View>
     </TouchableOpacity>
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

textview:{
    marginTop:vh*0.05,
    alignItems:"center"
},
textstyle:{
    color:"black",
    fontSize:16,
    marginLeft:10,
    fontWeight:"bold",
    marginVertical:2
},
detailstyle:{
    flex:1,
    flexDirection:"column",
    paddingVertical:10,   
},
cartstyle:{
    marginTop:vh*0.09,
    marginHorizontal:10,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"#ffcc66",
    flexDirection:"row"
},


inputtxt:{
    marginLeft:10,
    color:"#ffcc66"
}
});

export default AllTanent