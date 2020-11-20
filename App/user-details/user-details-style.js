import { StyleSheet } from 'react-native';

const UserDetailsStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  keyBoardAvoidingView: {
    backgroundColor: '#fff'
  },
  formView: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderColor: 'blue',
    borderWidth: 3,
  },
  formHeading: {
    paddingVertical: 18,
    backgroundColor: 'blue'
  },
  flatListHeading: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  errorView: {
    alignSelf: 'flex-end'
  },
  errorText: {
    color: 'red',
  },
  textFormHeading: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formFieldBox: {
    marginBottom: 8,
  },
  formFieldView: {
    flexDirection: 'row',
  },
  labelForm: {
    flex: 3,
    height: 40,
    fontSize: 18,
    paddingVertical: 7
  },
  textFieldView: {
    flexDirection: 'column'
  },
  textInput: {
    flex: 8,
    height: 40,
    color: 'black',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 12,
    marginBottom: 5,
  },


  button: {
    alignItems: "center",
    backgroundColor: 'blue',
    padding: 12,
    marginTop: 5,

    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  //Flat List View
  flatListView: {
    borderColor: 'blue',
    borderWidth: 1,
  },
  cardView: {
    borderWidth: 0.2,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  userDetailsView: {
    flex: 1,
    flexDirection: 'row',

  },
  subHeadingView: {
    flex: 3,

  },
  detailView: {
    flex: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  textSubHeading: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textData: {
    fontSize: 16,
  },

  emptyListView: {
    flex: 1,
    justifyContent: 'center',
  },
  textEmptyList: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  // Footer Style
  footerView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 5
  },
  textFooter: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default UserDetailsStyle;