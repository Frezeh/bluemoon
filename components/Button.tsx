import React, {useContext} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InventoryContext} from '../context';

type Props = {
  handlePress?: () => void;
  label: string;
  disabled: boolean;
};

export default function Button(props: Props) {
  const {handlePress, label, disabled} = props;
  const {isLoading} = useContext(InventoryContext);

  return (
    <View style={styles.padding}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.loginButton}
        disabled={disabled}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#4682B4" />
        ) : (
          <Text style={styles.loginText}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#000000',
    width: '80%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  loginText: {
    color: 'white',
    fontSize: 17,
  },
});
