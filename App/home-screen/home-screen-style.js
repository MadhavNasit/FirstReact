import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  headerView: {
    backgroundColor: '#000FFF',
    paddingVertical: 15,
    height: 110,
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  profilePhoto: {
    alignItems: "center",
    marginBottom: 5,
  },
  profileLogo: {
    marginTop: -90,
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 80,
    borderColor: '#c4c4c4'
  },
  profileData: {
    padding: 5,
  },
  profileDataName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  profileDataContact: {
    marginTop: 5,
  },
  profileDataContactText: {
    textAlign: "center",
    fontSize: 16,
  },
  mainView: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#0011ff',
    color: '#fff',
    backgroundColor: '#000FFF',
    paddingLeft: 4,
  },
  personalInfoData: {
    marginLeft: 15,
  },
  formatePersonalInfo: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
  subHeading: {
    width: 150,
    fontSize: 16,
    fontWeight: 'bold',
  },
  InformationText: {
    fontSize: 16,
  },
  educationSubView: {
    marginTop: 5,
    paddingBottom: 5,
  },
  instituteName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subViewTechnology: {
    marginVertical: 4,
  },
  technologyList: {
    paddingLeft: 5,
  },
  headingTechnology: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 5,
    alignItems: "center",
    backgroundColor: '#0000FF',
    padding: 12
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default HomeScreenStyle;