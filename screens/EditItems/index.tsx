import {useContext} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import Form from '../../components/Form';
import {InventoryActionsContext} from '../../context';
import {EditProps} from '../../navigation/StackNavigator';
import styles from './style';

export default function Edit({route}: EditProps) {
  const {deleteInventory} = useContext(InventoryActionsContext);
  const {data} = route.params;

  const handleDelete = () => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteInventory(data),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.itemContainer}>
          <ScrollView style={styles.item}>
            <Text style={[styles.text, {color: '#FFFFFF'}]}>{data.name}</Text>
            <Text style={[styles.text2, {color: '#FFFFFF'}]}>
              {data.price} NGN
            </Text>
            <Text style={[styles.text2, {color: '#FFFFFF'}]}>
              {data.stock} Items left
            </Text>
            <Text style={[styles.text2, {color: '#FFFFFF'}]}>
              {data.description}
              Items left
            </Text>
          </ScrollView>

          <TouchableOpacity onPress={handleDelete}>
            <Image
              source={require('../../assets/remove.png')}
              //style={styles.addImage}
            />
          </TouchableOpacity>
        </View>

        <Form type="editItems" itemId={data.id}/>
      </View>
    </SafeAreaView>
  );
}
