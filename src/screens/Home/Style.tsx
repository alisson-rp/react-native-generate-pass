import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#87CEEB',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    logoContainer: {
      width:'80%',
      flexDirection:'column',
      borderColor: '#FFFF00',
      borderWidth:2,
      borderRadius: 280,
      justifyContent:'center',
      alignItems: 'center',
      marginBottom:60,
      paddingVertical:60,
      backgroundColor:'#1E90FF'
    },
    inputConteiner: {
      width:'80%',
      alignItems:'center',
      flexDirection:'column'
    }
});

export default styles;