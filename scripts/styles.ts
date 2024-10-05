import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    numberBtnRow:{
        flex:0, 
        flexDirection: 'row', 
        alignSelf: 'center', 
        height:'20%',
        marginBottom: 3
    },
    numberBtn:{
        marginHorizontal: 2,
        height: '100%',
        width: '22%'
    },
    numberTxt:{
        fontSize: 20,
        fontFamily: 'RetroGastrollRegular-ywvn3',
        color: 'black'
    },
    letterTxt:{
        fontSize: 40,
        fontFamily: 'CafeDeParisSans-BWwJx',
        color: 'white'
    },
    operatorBtn:{
        marginHorizontal: 2,
        height: '100%',
        width: '22%'
    },
    operatorTxt:{
        fontSize: 40,
        fontFamily: 'CafeDeParisSans-BWwJx',
        color: 'white'
    },
    displayArea:{
        flex:2, 
        height:'100%', 
        width:'90%', 
        backgroundColor:'grey',
        borderRadius: 10,
    },
    displayTxt:{
        fontFamily: 'Technology',
        fontSize: 60,
        textAlign:'right',
        height: '100%',
        textAlignVertical:'center',
        marginRight: 4    
    }
});