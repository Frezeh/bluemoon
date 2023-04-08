import {View, Text, TextInput, ImageBackground} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './style';
import Button from '../../components/Button';
import {Formik} from 'formik';
import * as yup from 'yup';
import {InventoryActionsContext} from '../../context';

type FocusedType = 'email' | 'password';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(3, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function Login() {
  const {logIn} = useContext(InventoryActionsContext);

  const [focused, setFocused] = useState<FocusedType>();

  return (
    <View>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../../assets/loginBackground.png')}>
        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            <Text style={styles.welcome}>{'Welcome back'}</Text>
            <Text style={styles.subheading}>{'Log into your account'}</Text>

            <Formik
              validateOnMount={true}
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={values => logIn(values)}>
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
                    <Text style={styles.emailText}>{'Email address'}</Text>
                    <View
                      style={[
                        styles.emailInputContainer,
                        focused === 'email' && {borderColor: 'blue'},
                        !!errors.email &&
                          !!touched.email && {borderColor: 'red'},
                      ]}>
                      <TextInput
                        style={styles.emailInput}
                        onFocus={() => setFocused('email')}
                        multiline={true}
                        placeholder={'e.g Johndoe@email.com'}
                        placeholderTextColor="#8C8CA1"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                      />
                    </View>
                    {errors.email && touched.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>{'Password'}</Text>
                    <View
                      style={[
                        styles.passwordInputContainer,
                        focused === 'password' && {borderColor: 'blue'},
                        !!errors.password &&
                          !!touched.password && {borderColor: 'red'},
                      ]}>
                      <TextInput
                        style={styles.passwordInput}
                        onFocus={() => setFocused('password')}
                        secureTextEntry={true}
                        placeholder={'• • • • • • • •'}
                        placeholderTextColor="#8C8CA1"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                      />
                    </View>
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>

                  <Button
                    label="Log in"
                    disabled={!isValid}
                    handlePress={handleSubmit}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
