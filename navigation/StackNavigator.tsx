import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {InventoryData} from '../context/types';
import AddItems from '../screens/AddItems';
import Edit from '../screens/EditItems';
import Inventory from '../screens/Inventory';
import Login from '../screens/Login';

const loginOptionStyle = {
  gestureEnabled: true,
  headerShown: false,
};

export type LoginStackParams = {
  LoginStack: undefined;
};

export type RootStackParams = {
  Inventory: undefined;
  Add: undefined;
  Edit: {data: InventoryData};
};

export type InventoryProps = StackScreenProps<RootStackParams, 'Inventory'>;
export type AddProps = StackScreenProps<RootStackParams, 'Add'>;
export type EditProps = StackScreenProps<RootStackParams, 'Edit'>;

const RootStack = createStackNavigator<RootStackParams>();
const LoginStack = createStackNavigator<LoginStackParams>();

const LoginScreenStack = () => {
  return (
    <LoginStack.Navigator screenOptions={loginOptionStyle}>
      <LoginStack.Screen name="LoginStack" component={Login} />
    </LoginStack.Navigator>
  );
};

const RootStackScreenStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Inventory"
      screenOptions={{gestureEnabled: true}}>
      <RootStack.Screen name="Inventory" component={Inventory} />
      <RootStack.Screen name="Add" component={AddItems} />
      <RootStack.Screen name="Edit" component={Edit} />
    </RootStack.Navigator>
  );
};

export {LoginScreenStack, RootStackScreenStack};
