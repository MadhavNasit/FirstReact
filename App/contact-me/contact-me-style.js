import { StyleSheet } from 'react-native';
import ContactMe from './contact-me';

const ContactMeStyle = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    paddingVertical: 15,
    paddingVertical: 25
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  formOuterView: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  textInput: {
    height: 40,
    color: 'black',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 12,
    marginBottom: 10
  },
  nameView: {
    flex: 1,
    flexDirection: "row",

  }
});

export default ContactMeStyle;