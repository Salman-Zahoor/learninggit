import React,{useState} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh} from "../../constants"

const SignUp = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signUpUser = () =>{
        setLoading(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        
        .then(response =>{
            let id=firebase.auth().currentUser.uid
            firebase.database().ref(`userss/${id}`)
            .set({
                name,
                email,
                isActive:"true"
            })
            .then(responsee =>{
                setLoading(false)
                alert("successful")
            })
            setLoading(false)
            // console.log(response,"RESPONSEEEE");
            setName("")
            setEmail("")
            setPassword("")
        })
        .catch(errr =>{
            setLoading(false)
            alert(errr.message)
            console.log(errr,"ERRRRRRRR");
        })
    }

    
    const renderButton = () =>{
        if (loading == true){
            return(
                <ActivityIndicator
                size="large"
                color="black"
                />
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.buttonstyle}
            onPress={signUpUser}
            >
                <Text style={styles.signuptxt}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            )
        }
    }
    // console.log("NAMEEE==>",name);
    return(
        <View style={styles.mainview}>
<View style={styles.imagess}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.imgstyle}
            />
            </View>

        <View style={styles.innerview}
  >
        <View style={styles.inputView}>
            <TextInput
            placeholder="Set your home name"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={name}
            onChangeText={(main)=>setName(main)}

            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="#ffcc66"
            style={styles.inputtxt}
            secureTextEntry
            value={password}
            onChangeText={(main)=>setPassword(main)}
            />
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("Login")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"#ffcc66"}}>
             Already Have Account? Login
            </Text>
        </TouchableOpacity>

            {renderButton()}
            
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
imagess:{
    alignItems:"center",
    marginTop:vh*0.08,
},
imgstyle:{
    height:vh*0.35,
    width:vw*0.65
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
inputView:{
    height:40,
    borderBottomWidth:2,
    marginHorizontal:25,
    marginTop:10,
    borderBottomColor:'#ffcc66'

},
inputtxt:{
    marginLeft:10,
    color:"#ffcc66"
}
});

export default SignUp