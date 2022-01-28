import * as React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,ScrollView}from "react-native"
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import firebase from 'firebase';
import {vw,vh} from "../../constants"
import AccountDetails from '../../components/AccountDetails';
import GetAccount from '../../components/AccountdetGet';


 
// sell product function
const Account = (props) =>{
    const [inputFields, setInputFields] = useState(true)
    const [record,setRecord]=useState(false)

    const showForm = () => {
        setInputFields(false)
        setRecord(true)
      }
    return(
        <View style={styles.mainviewstyle}>
            <Header 
            heading="Account Details"/>

<ScrollView>

   {inputFields ? <AccountDetails/>: null}
    {record ? <GetAccount/>:null}
   <TouchableOpacity onPress={showForm} 
        style={styles.button}
        >
            <Text style={styles.buttontxt}>
                Change Record
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
export default Account