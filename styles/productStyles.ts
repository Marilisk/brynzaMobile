import { StyleSheet } from "react-native";

export const grayBorderColor = '#E9EAEE'
export const grayBackgroundColor = '#E0E0E0'
export const spacing = 12
export const fontColor = '#1F2024'
export const darkGrayBackgroundColor = '#4F4F4F'


export const productStyles = StyleSheet.create({
  wrap: {
    //borderWidth: 1,
    //borderColor: grayBackgroundColor,
    width: '50%',
    //display: 'flex',
    color: fontColor,
    fontSize: 14,
  },

  container: {
    borderWidth: 1,
    //width: '90%',
    margin: 6,


    borderColor: grayBackgroundColor,
    borderRadius: 13,
    backgroundColor: grayBackgroundColor,
    height: 173,
  },

  imageWrap: {
    overflow: "hidden",
    borderTopEndRadius: 13,
    borderTopStartRadius: 13,
  },

  image: {
    width: '100%',
    height: 100,    
  },

  title: {

  },

  name: {
    //fontSize: 14,
  },

  description: {
    padding: 8,
    alignContent: 'center',
    /* borderColor: 'red',
    borderWidth: 1, */
    justifyContent: 'center',
    marginTop: 4,
  },

  orderLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontWeight: '700',
  },

  button: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    //paddingBottom: 5,
    backgroundColor: darkGrayBackgroundColor,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    //textAlignVertical: 'top',
  },

  buttonText: {
    color: 'white',
    textAlignVertical: 'top',
    textAlign: 'center',
    marginBottom: 2,
    /* borderColor: 'white',
    borderWidth: 1, */


    
  }
})