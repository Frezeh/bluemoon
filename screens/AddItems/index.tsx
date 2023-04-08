import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Form from '../../components/Form';

const fontFamily =
  Platform.OS === 'android' ? 'sans-serif-condensed' : 'Avenir Next';

export default function AddItems() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Add items</Text>

        <Form type="addItems" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {paddingLeft: 20, paddingRight: 20, paddingTop: 20},
  headerText: {
    fontSize: 30,
    color: "#222",
    fontWeight: '500',
    fontFamily,
  },
});
