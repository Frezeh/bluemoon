import {StyleSheet, Platform, PixelRatio} from 'react-native';

const fontFamily =
  Platform.OS === 'android' ? 'sans-serif-condensed' : 'Avenir Next';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    height: '100%'
  },
  imageContainer: {
    marginTop: Platform.OS === 'ios' ? 50 : 70,
    marginLeft: 20,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 5,
  },
  bodyContainer: {
    margin: 20,
  },
  welcome: {
    color: '#000000',
    fontSize: 22,
    fontFamily,
  },
  subheading: {
    color: '#022141',
    fontSize: 16,
    fontFamily,
    paddingTop: 10,
    paddingBottom: 5,
  },
  emailContainer: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  emailText: {
    color: '#022141',
    fontSize: 16,
    fontFamily,
  },
  emailInputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS === 'ios' ? 50 : 45,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  inputtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    margin: 10,
  },
  emailInput: {
    // width: Platform.OS === "android" ? 250 : 350,
    // height: "100%",
    marginLeft: 10,
    width: '100%',
    color: "#222"
    // marginTop: Platform.OS === "android" ? 0 : 15,
    // marginBottom: Platform.OS === "android" ? 0 : 8,
  },
  emailInput1: {
    width: Platform.OS === 'android' ? 250 : 300,
    height: '100%',
    marginLeft: 10,
    marginTop: Platform.OS === 'android' ? 0 : 10,
    marginBottom: Platform.OS === 'android' ? 0 : 8,
  },
  passwordContainer: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  passwordText: {
    color: '#022141',
    fontSize: 16,
    fontFamily,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS === 'ios' ? 50 : 45,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  passwordInput: {
    width: "90%",
    height: '100%',
    marginLeft: 10,
    marginTop: Platform.OS === 'android' ? 0 : 10,
    marginBottom: Platform.OS === 'android' ? 0 : 8,
    color: "#222"
  },
  descriptionInput: {
    width: "90%",
    height: '100%',
    marginLeft: 10,
    marginTop: Platform.OS === 'android' ? 0 : 10,
    color: "#222"
  },
  forgottenPasswordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgottenPassword: {
    color: '#000000',
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'right',
  },
  googleButton: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  googleImage: {
    width: 40,
    height: 50,
    borderRadius: 10,
  },
  googleText: {
    color: '#000000',
    fontSize: 15,
    fontFamily,
  },
  createAccount: {
    color: '#0000FF',
    fontSize: 17,
    textAlign: 'center',
    fontFamily,
  },
  fingerprintContainer: {
    position: 'absolute',
    bottom: 50,
    right: 10,
  },
  fingerprintImage: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 56.26,
    height: 30,
    borderRadius: 30,
  },
  body: {
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(100),
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  descriptionInputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS === 'ios' ? 100 : 95,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: 'gray',
    paddingHorizontal: 2,
    marginTop: 10,
    marginBottom: 10,
  },
});
