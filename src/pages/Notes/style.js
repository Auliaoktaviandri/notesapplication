import { StyleSheet } from 'react-native'
import Colors from '../../styles/color'

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor:Colors.black,
        padding:20
    },
    txtInput:{
        fontSize:18
    },
    txtTitleNote:{
        width:'100%',
        padding:10,
        borderBottomWidth:0.5,
        marginBottom:20,
        fontSize:20,
        color:'#000000'
    }
})

export default style;