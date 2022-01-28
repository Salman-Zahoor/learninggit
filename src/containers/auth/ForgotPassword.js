import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Image } from "react-native";
import firebase from "firebase";
import { vh ,vw} from "../../constants";


const ForgotPassword=(props) =>{
    const [resetEmail,setResetEmail]=useState("")

    const PasswordReset=()=>{
        firebase.auth().sendPasswordResetEmail(resetEmail)
        .then(response=>{
            setResetEmail("")
            alert("Reset Email has bees sent")
        })
        .catch(error=>{
            alert(error.message)
        })
    }
return(
    <View style={styles.mainview}>

    <View style={styles.imagess}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.imgstyle}
            />
            </View>

        <View style={styles.innerview}>
        <View style={styles.inputView}>
        <TextInput
        placeholder="Reset Email"
        placeholderTextColor="#ffcc66"
        style={styles.placeholder}
        value={resetEmail}
        onChangeText={(text)=>setResetEmail(text)}
        />
        </View>
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("Login")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"#ffcc66"}}>
              Login
            </Text>
        </TouchableOpacity>

<TouchableOpacity style={styles.buttonstyle}
                onPress={PasswordReset}
                >
                <Text style={styles.textstyle}>
                Send Reset Password
                </Text>
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
placeholder:{
    marginLeft:10,
     color:"#ffcc66"
},
textstyle:{
    color:"black",
    fontSize:20
},
mainview:{
    flex:1,
    backgroundColor:"black"
},
innerview:{
    justifyContent:"center",
    marginTop:vh*0.05,
},
inputView:{
    height:40,
    borderBottomWidth:2,
    marginHorizontal:25,
    marginTop:10,
    borderBottomColor:"#ffcc66",

},
imagess:{
    alignItems:"center",
    marginTop:vh*0.08,
},
imgstyle:{
    height:vh*0.35,
    width:vw*0.65
},

})

export default ForgotPassword