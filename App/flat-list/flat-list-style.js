import { StyleSheet } from 'react-native';

const FlatListStyle = StyleSheet.create({
  // Header Style
  headerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    height: 65,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    color: '#fafafa',
  },
  // Flat List View Box
  cardView: {
    flex: 1,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageFit: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    position: 'relative',

  },
  bannerText: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    color: '#fafafa',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  // Footer Style
  footerView: {
    flex: 1,
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
  //Empty list View Style
  emptyListView: {
    flex: 1,
    justifyContent: 'center',
    height: 700,
  },
  textEmptyList: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  }

})

export default FlatListStyle;