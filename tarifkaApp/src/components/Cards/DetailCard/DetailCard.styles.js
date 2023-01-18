import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width: Dimensions.get('window').width/1,
        height: Dimensions.get('window').height/2
    },
    body_container:{
        margin:8
    },
    line:{
        borderBottomColor:'gray',
        borderBottomWidth:1
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        color:'#820000'
    },
    country:{
        fontSize:22,
        fontWeight:'bold',
        color:'#A10035'
    },
    description:{
        margin:8,
        fontSize:18,
        color:'black',
        textAlign:'justify'
    },
    youtube:{
        borderRadius:10,
        padding:10,
        margin:8,
        color:'white',
        fontSize:22,
        backgroundColor:'red',
        textAlign:'center',
        fontWeight:'bold'
    },
});