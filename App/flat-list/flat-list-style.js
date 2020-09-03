import { StyleSheet } from 'react-native';

const FlatListStyle = StyleSheet.create({
  cardView: {
    flex: 1,
    height: 100,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageFit: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden'
  },
  bannerText: {
    flex: 1,
    // justifyContent: 'center',
    flexDirection: 'row',
    // width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#151111',
    color: '#fafafa',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: '25%',

  }
})

export default FlatListStyle;