import { StyleSheet, Dimensions } from 'react-native';
import Colors from './../../styles/color';

const width = (Dimensions.get('window').width - 60)/2
const height = (Dimensions.get('window').height - 400)/2
const style = StyleSheet.create({
    noteArea:{
        backgroundColor: '#b0e0e6',
        width: width,
        height: height,
        padding: 10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4
    },
    txtNoteTitle:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold'
    },
    txtNote:{
        color:'black',
    }
})

export default style;
