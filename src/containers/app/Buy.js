import React, {useEffect,useState} from 'react';
import {View, Text,StyleSheet, TouchableOpacity,Image,ScrollView} from "react-native"
import firebase from 'firebase';


// buy function
const Buy = (props) =>{
// state for whole products array
    const[array,setArray]=useState([])
// use effect for data fetching 
    useEffect(() =>{
        let tempArray=[]

        firebase.database().ref("Productss")
        .on("value", snapshot =>{
            // console.log(snapshot.val(),"TOP_LEVEL");
            snapshot.forEach(innerproval =>{
                // console.log(innerproval.val(),"MID_LEVEL");
                innerproval.forEach(lastvalue =>{
                    // console.log(more.val(),"LAST_VALUE");
                    tempArray.push(lastvalue.val())
                })
            })
            // console.log(tempArray,"ALLLL_VALUES");
            setArray(tempArray)
        })
    },[])

    console.log(array,"LAST_VALUES");
    return(
        <ScrollView>
        <View style={styles.mainview}>
            {array.map(valuess =>{
                return(

                    <TouchableOpacity
                        onPress={()=>props.navigation.navigate("Buydetails",{
                            productt: valuess
                        })}
                    
                    >

                    <View style={styles.cartstyle}>
                <Image source={{ uri:`data:image/png;base64,${valuess.image}`}} style={styles.imagestyle}
                resizeMode="contain"
                /> 
                 <View style={styles.detailstyle}>       
                <Text style={styles.textstyle}>Name:{valuess.name}</Text>
                <Text style={styles.textstyle}>Title:{valuess.title}</Text>
                <Text style={styles.textstyle}>Price:{valuess.price}</Text>
                <Text style={styles.textstyle}>Address:{valuess.address}</Text>
                </View>
                
                </View>
                </TouchableOpacity>
                )})}
        </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    mainview:{
        flex:1
    },
cartstyle:{
    flex:1,
    marginTop:10,
    marginHorizontal:20,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"white",
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
}

});
export default Buy