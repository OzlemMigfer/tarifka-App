import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({    
    container:{
        flexDirection:'row',
        justifyContent:'center'
    },
    image:{
        resizeMode:'contain',
        minHeight:Dimensions.get('window').height/3,
        width:Dimensions.get('window').height/1.9,
        margin:10,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        backgroundColor:'rgba(0, 0, 0,0.5)',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        padding:10,
        width:Dimensions.get('window').height/1.9,
    }
});