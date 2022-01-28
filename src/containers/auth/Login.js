import React,{useState} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from "firebase";
import {vw,vh} from "../../constants"


const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const loginUser = () => {
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password)

        .then(respone =>{
            setLoading(false)
            console.log(respone,"LOGINNN");
            setEmail("")
            setPassword("")
        })
        .catch(errr =>{
            setLoading(false)
            alert(errr.message)
            console.log(errr,"ERRRRRRRRRR");
        })
    }


    const renderButton = () => {
        if (loading == true){
            return(
                <ActivityIndicator
                size="large"
                color="black"
                />
            )
        }
        else {
            return(
                <TouchableOpacity style={styles.buttonstyle}
                onPress={loginUser}
                >
                <Text style={{
                    color:"black",
                    fontSize:25
                }}>
                    Login
                </Text>
            </TouchableOpacity>
            )
        }
    }
console.log("PROPSS>>",props);
    return(
        <View style={{
            flex:1,
            backgroundColor:"black"
        }}>
<View style={styles.imagess}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.imgstyle}
            />
            </View>

        <View style={{
            justifyContent:"center",
            flex:1,
            marginBottom:vh*0.15
        }}>
        <View style={{
            height:40,
            borderBottomWidth:2,
            marginHorizontal:10,
            marginTop:10,
            borderRadius:10,
            borderBottomColor:"#ffcc66"
        }}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="#ffcc66"
            style={{
                marginLeft:10,
                color:"#ffcc66"
            }}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={{
            height:40,
            borderBottomWidth:2,
            marginHorizontal:10,
            marginTop:20,
            borderRadius:10,
            borderBottomColor:"#ffcc66"
        }}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="#ffcc66"
            style={{
                marginLeft:10,
                color:"#ffcc66"
            }}
            secureTextEntry
            value={password}
            onChangeText={(main)=>setPassword(main)}
            />
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("SignUp")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"#ffcc66"}}>
                Dont Have Account? SignUp
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("ForgotPassword")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"#ffcc66"}}>
                Forgot Password
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
imagess:{
    alignItems:"center",
    marginTop:vh*0.08,
},
imgstyle:{
    height:vh*0.35,
    width:vw*0.65
},
})

export default Login