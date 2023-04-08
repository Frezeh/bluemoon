import {useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {InventoryActionsContext, InventoryContext} from '../../context';
import {InventoryData} from '../../context/types';
import styles from './style';
import {InventoryProps} from '../../navigation/StackNavigator';

export default function Inventory({navigation}: InventoryProps) {
  const {signedInUserData} = useContext(InventoryContext);
  const {logOut} = useContext(InventoryActionsContext);

  const Item = (props: InventoryData) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Edit', {
          data: props,
        })
      }>
      <View style={styles.itemContainer}>
        <View>
          <View style={{marginRight: 20}}>
            <Text style={[styles.text, {color: '#FFFFFF'}]}>{props.name}</Text>
            <Text style={[styles.text2, {color: '#FFFFFF'}]}>
              {props.price} NGN
            </Text>
            <Text style={[styles.text2, {color: '#FFFFFF'}]}>
              {props.stock} Items left
            </Text>
          </View>
        </View>

        <Image
          source={require('../../assets/loginBackground.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inventory</Text>
          <TouchableOpacity onPress={() => logOut()}>
            <Image source={require('../../assets/logout.png')} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={signedInUserData.inventory}
          renderItem={({item}) => (
            <Item
              name={item.name}
              price={item.price}
              stock={item.stock}
              id={item.id}
              description={item.description}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate('Add')}>
        <Image
          source={require('../../assets/addIcon.png')}
          style={styles.addImage}
        />
      </TouchableOpacity>
    </>
  );
}
