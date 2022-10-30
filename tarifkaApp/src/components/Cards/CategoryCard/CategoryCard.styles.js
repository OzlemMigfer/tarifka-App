import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin:10,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'white',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50
    },
    image:{
        flexDirection:'row',
        backgroundColor:'white',
        resizeMode:'contain',
        width:100,
        minHeight:100,      
        marginLeft:10,
        borderRadius:50
    },
    title:{
        fontSize:24,
        color:'black',
        textAlign:'center',
        marginTop:15,
        padding:15
    }
});