import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#ebe85b'
    },
    taskButton: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 5,
      borderRadius: 10
    },
    taskBox: {
      padding: 14,
      backgroundColor: '#ebe85b',
      marginBottom: 5
    },
    formBox: {
      padding: 14,
      backgroundColor: '#ebe85b',
      marginBottom: 5
    },
    spaced: {
      padding: 15
    },
    cta: {
      fontSize: 30
    },
    margined: {
      marginBottom: 10
    },
    center: {
      textAlign: 'center'
    },
    bodyText: {
      color: '#fff'
    },
    boldText: {
      color: '#fff',
      fontWeight: 'bold'
    },
    inputText: {
      color: '#000',
      padding: 4,
      margin: 4,
      height: 35,
      backgroundColor: '#eee',

      borderColor: 'gray',
      borderWidth: 1
    },
    headerText: {
      marginTop: 20,
      marginBottom: -10,
      fontSize: 50,
      textAlign: 'center',
      color: '#000'
    },
    subHeaderText: {
      padding: 15,
      backgroundColor: 'black',
      marginTop: 20,
      fontSize: 20,
      textAlign: 'center',
      color: '#ebe85b'
    }
  });
  
  export { styles }