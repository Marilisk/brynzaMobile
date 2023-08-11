import { StyleSheet } from "react-native";
import { grayBorderColor, spacing } from "./productStyles";


export const catStyles = StyleSheet.create({
  container: {
    height: 64,
    borderRadius: 16,
    marginBottom: 16,

  },

  cat: {
    /* borderWidth: 1,
    borderColor: '#D9D9D9', */
    width: 64,
    height: 64,
    marginRight: 6,
  },

  text: {
    textAlignVertical: 'bottom',
    /* borderWidth: 1,
    borderColor: '#D9D9D9', */
    marginBottom: 0,

  },

  photoWrapper: {
    flex: 1,
    /* borderColor: 'red',
    borderWidth: 1, */
    alignItems: 'center',
    justifyContent: 'center',
    /* height: 30,
    width: 30, */
  },

  photo: {
    /* width: 20,
    height: 20, */
    /* borderColor: 'blue',
    borderWidth: 1,
    display: 'flex', */
    //alignSelf: 'center'
    
  },


});