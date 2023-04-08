import {PixelRatio, Platform, StyleSheet} from 'react-native';

const fontFamily =
  Platform.OS === 'android' ? 'sans-serif-condensed' : 'Avenir Next';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  itemContainer: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(60),
    borderRadius: 15,
    borderColor: '#B9D9EB',
    borderWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#222",
    paddingLeft: 20,
    paddingRight: 20,
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
  margin: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    paddingRight: 20,
    paddingTop: 20,
  },
});

export default styles;