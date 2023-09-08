import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";
import ErrorComponent from '../components/ErrorComponent';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [showErrors, setShowErrors] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validation}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log('Form Gönderildi:', values);
          resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={() => {
                handleBlur('email');
                setShowErrors(false); 
              }}
              value={values.email}
              inputMode='email'
              placeholder="Kullanıcı Adı"
            />
            {errors.email  && showErrors && (<ErrorComponent message={errors.email}/>)}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={() => {
                handleBlur('password');
                setShowErrors(false); 
              }}
              value={values.password}
              placeholder="Şifre"
              secureTextEntry={true}
            />
            {errors.password  && showErrors && (<ErrorComponent message={errors.password}/>)}

            <TouchableWithoutFeedback onPress={() => {
              setShowErrors(true); 
              handleSubmit();
            }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
};

const validation = Yup.object().shape({
  email: Yup.string().email("Email uygun değil!").required("Email boş olamaz!"),
  password: Yup.string().required("Parola boş olamaz!")
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;
