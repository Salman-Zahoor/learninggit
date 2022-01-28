import React from "react";
import { View, StyleSheet, Text,Image, TouchableOpacity } from "react-native";

// buy details fnc
const Buydetails=({route})=>{
    // console.log(props.route.params.productt,"DATAAAAAAAAAA");

    const{
        name,
        price,
        address,
        description,
        title,
        image
    }=route.params.productt
    return(
        <View style>
            <View style={styles.imagess}>
            <Image source={{uri:`data:image/png;base64,${image}`}} style={styles.imgstyle}
            resizeMode="contain"
            />
            </View>

            <View style={styles.innerview}>
            <Text style={styles.textview}>Name:</Text>
            <Text style={styles.textstyle}>{name}</Text>
            </View>

            <View style={styles.innerview}>
            <Text style={styles.textview}>Price:</Text>
            <Text style={styles.textstyle}>{price}</Text>
            </View>

            <View style={styles.innerview}>
            <Text style={styles.textview}>Title:</Text>   
            <Text style={styles.textstyle}>{title}</Text>
            </View>

            <View style={styles.innerview}>
            <Text style={styles.textview}>description:</Text>
            <Text style={styles.textstyle}>{description}</Text>
            </View>

            <View style={styles.innerview}>
            <Text style={styles.textview}>Address:</Text>
            <Text style={styles.textstyle}>{address}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt}>
                Buy Now
            </Text>
        </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
    mainview:{
        flex:1,
    },
imagess:{
    alignItems:"center",
    marginTop:10,
},
innerview:{
    flexDirection:"row",
    marginTop:10,
    marginLeft:20,
    alignItems:"center"
},
textview:{
    color:"black",
    fontWeight:"bold",
    fontSize:20
},

textstyle:{
    color:"black",
    fontSize:16,
    fontWeight:"500"
},
imgstyle:{
    height:200,
    width:350,
    borderRadius:10,
},
button:{
    alignItems:"center",
    backgroundColor:"black",
    marginHorizontal:60,
    marginVertical:10,
    borderRadius:50,
    marginTop:30,
    height:40
},
buttontxt:{
color:"#f7f7f7",
fontSize:20,
justifyContent:"center",
textAlign:"center"
},
});
export default Buydetails