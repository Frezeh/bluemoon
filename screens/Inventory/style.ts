import {StyleSheet, Platform} from 'react-native';

const fontFamily =
  Platform.OS === 'android' ? 'sans-serif-condensed' : 'Avenir Next';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  itemContainer: {
    width: '90%',
    height: 120,
    borderRadius: 15,
    borderColor: '#B9D9EB',
    borderWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#222',
  },
  header: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#222',
    fontWeight: '500',
    fontFamily,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#022141',
    fontFamily,
  },
  text2: {
    fontSize: 13,
    color: '#022141',
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  add: {
    position: 'absolute',
    bottom: '5%',
    right: '10%',
  },
  addImage: {
    width: 70,
    height: 70,
  },
});

export default styles;
