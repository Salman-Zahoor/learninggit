import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader=()=>{
    return(
        <View style={styles.mainview}>
            <ActivityIndicator size="large" color="black" backgroundColor="white"/>
        </View>
    )
}

const styles=StyleSheet.create({
mainview:{
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    backgroundColor:"white"
},
});
export default Loader