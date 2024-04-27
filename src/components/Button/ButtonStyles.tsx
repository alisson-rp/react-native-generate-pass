import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginTop:5,
    alignItems:'center',
    width:'47%',
    justifyContent:'center',
    paddingVertical: 12,
    backgroundColor: '#1E90FF',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation:3,
  },
  text:{
    fontSize:16,
    lineHeight:21,
    fontWeight:'bold',
    letterSpacing: 0.25,
    color: '#E5BF3C'
  },
  ViewButton:{
      width:'100%',
      flexDirection:'row',
      marginTop:5,
      justifyContent:'space-between',
  }
});