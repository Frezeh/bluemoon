import {Formik} from 'formik';
import {useContext, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import * as yup from 'yup';
import Button from './Button';
import {styles} from '../screens/Login/style';
import {randomId} from '../context/utils';
import {InventoryActionsContext, InventoryContext} from '../context';
import {useNavigation} from '@react-navigation/native';

type FocusedType = 'name' | 'price' | 'description' | 'stock';

type SubmitType = {
  name: string;
  price: string;
  description: string;
  stock: string;
};

type Props = {
  type: 'addItems' | 'editItems';
  itemId?: string;
};

export default function Form({type, itemId}: Props) {
  const [focused, setFocused] = useState<FocusedType>();
  const {createInventory, updateInventory} = useContext(
    InventoryActionsContext,
  );
  const {signedInUserData} = useContext(InventoryContext);

  const navigation = useNavigation();

  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .test('is-unique', 'Name must be unique', value => {
        const foundElement = signedInUserData.inventory.some(
          l => l.name === value,
        );
        return !foundElement;
      })
      .required('Name is Required'),
    price: yup
      .number()
      .typeError('Price must be a number')
      .required('Price is required'),
    description: yup
      .string()
      .min(3, ({min}) => `Description must be at least ${min} characters`)
      .required('Description is required'),
    stock: yup
      .number()
      .typeError('Total stock must be a number')
      .required('Total stock is required'),
  });

  const handleSubmitForm = (v: SubmitType) => {
    if (type === 'addItems') {
      createInventory({...v, id: randomId()});
      navigation.goBack();
    }

    if (type === 'editItems') {
      updateInventory({...v, id: itemId!});
      navigation.goBack();
    }
  };

  return (
    <View>
      <Formik
        validateOnMount={true}
        validationSchema={formValidationSchema}
        initialValues={{name: '', price: '', description: '', stock: ''}}
        onSubmit={values => handleSubmitForm(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.emailContainer}>
              <View
                style={[
                  styles.emailInputContainer,
                  focused === 'name' && {borderColor: 'blue'},
                  !!errors.name && !!touched.name && {borderColor: 'red'},
                ]}>
                <TextInput
                  style={styles.emailInput}
                  onFocus={() => setFocused('name')}
                  multiline={true}
                  placeholder={'Name'}
                  placeholderTextColor="#8C8CA1"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>
              {errors.name && touched.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>

            <View style={styles.passwordContainer}>
              <View
                style={[
                  styles.passwordInputContainer,
                  focused === 'price' && {borderColor: 'blue'},
                  !!errors.price && !!touched.price && {borderColor: 'red'},
                ]}>
                <TextInput
                  style={styles.passwordInput}
                  onFocus={() => setFocused('price')}
                  placeholder={'Price'}
                  placeholderTextColor="#8C8CA1"
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  keyboardType={'numeric'}
                />
              </View>
              {errors.price && touched.price && (
                <Text style={styles.errorText}>{errors.price}</Text>
              )}
            </View>
            <View style={styles.passwordContainer}>
              <View
                style={[
                  styles.passwordInputContainer,
                  focused === 'stock' && {borderColor: 'blue'},
                  !!errors.stock && !!touched.stock && {borderColor: 'red'},
                ]}>
                <TextInput
                  style={styles.passwordInput}
                  onFocus={() => setFocused('stock')}
                  placeholder={'Total stock'}
                  placeholderTextColor="#8C8CA1"
                  onChangeText={handleChange('stock')}
                  onBlur={handleBlur('stock')}
                  keyboardType={'numeric'}
                />
              </View>
              {errors.stock && touched.stock && (
                <Text style={styles.errorText}>{errors.stock}</Text>
              )}
            </View>
            <View style={styles.passwordContainer}>
              <View
                style={[
                  styles.descriptionInputContainer,
                  focused === 'description' && {borderColor: 'blue'},
                  !!errors.description &&
                    !!touched.description && {borderColor: 'red'},
                ]}>
                <TextInput
                  style={styles.descriptionInput}
                  onFocus={() => setFocused('description')}
                  multiline={true}
                  placeholder={'Description.....'}
                  placeholderTextColor="#8C8CA1"
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                />
              </View>
              {errors.description && touched.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}
            </View>

            <Button
              label={type === 'addItems' ? 'Add items' : 'Edit'}
              disabled={!isValid}
              handlePress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
