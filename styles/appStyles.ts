import { StyleSheet } from "react-native";
import { grayBorderColor, spacing } from "./productStyles";


export const appStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 18,
    },
  

    columnWrapper: {
      width: '100%',
      flex: 1,
      /* borderColor: 'green',
      borderWidth: 1, */
      alignItems: 'center',
      //justifyContent: 'space-evenly',
      //columnGap: 12,
      //gap: 12,


      //gap: spacing,
    },

    imageWrap: {
      display: 'flex',
      justifyContent: 'center',
    },

    image: {
      //flex: 1,
      width: '80%',
      height: 60,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    tabs: {
      height: 60,
      //width: '100%',
      //flex: 1,
      borderColor: grayBorderColor,
      borderTopWidth: 1,
    }
  });