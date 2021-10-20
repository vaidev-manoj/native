import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet,Text,Button} from 'react-native';
import AppText from '../App/components/Apptext';
import AppTextInput from '../App/components/AppTextInput'
import SubmitButton from '../App/components/SubmitButton';
import * as yup from 'yup'
import AppButton from '../App/components/AppButton';
import colors from '../App/config/colors';
const loginValidationSchema =yup.object().shape ({ 
 name:yup
    .string()
   
    .required('name is Required')
   ,
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required')
    .matches("@gmail.com"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Password is required'),
    confirmpassword: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Confirm Password is required'),
})
function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
<Text style={styles.text}> Letz Connect</Text>
<Formik 
initialValues={{name:"",email:"",password:"",confirmpassword:""}}
onSubmit={values=>console.log(values)}
validationSchema={loginValidationSchema} >
 {({handleChange, handleBlur, handleSubmit,values,errors,isValid,touched,setFieldTouched})=>(
       <>
       <View style={styles.APP}>
       <AppText style={styles.addtext}>USER NAME </AppText>
<AppTextInput placeholder="NAME"

autoCorrect={false}
onChangeText={handleChange("name")}>
</AppTextInput>
{(errors.name && touched.name) &&
                  <Text style={styles.errorText}>{errors.name}</Text>}
         <AppText style={styles.addtext}>EMAIL</AppText>
<AppTextInput placeholder="Email" keyboardType="email-address"

autoCorrect={false}
onChangeText={handleChange("email")}>
</AppTextInput>
{(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>}
                    <AppText style={styles.addtext}>PASSWORD</AppText>
                  <AppTextInput placeholder="password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.password && touched.password) &&

                  <Text style={styles.errorText}>{errors.password}</Text>}

<AppText style={styles.addtext}>CONFIRM PASSWORD</AppText>
                  <AppTextInput placeholder="password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.confirmpassword && touched.confirmpassword) &&

                  <Text style={styles.errorText}>{errors.confirmpassword}</Text>}         
                  
<SubmitButton title="Sign in"   color="buttoncolor" onLongPress={() =>navigation.navigate('AddDetails')}/>

<Button title="Adddetails" color="#E5E5E5" onPress={() =>navigation.push('AddDetails')}></Button>
</View>
       </>
          )}
</Formik>
<Text style={styles.add}> NEW USER AGREED FOR THE TERMS AND CONDITIONS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E5E5E5",
    flex:1,
    top:10,

  },
  text:{
    fontSize:35,
    color:"blue",
    justifyContent:"center",
    alignSelf:"center",
    top:90
  },
  APP:{
    top:120,
width:"100%",
height:70,



  },
  errorText:{
    color:"red",
    fontSize:15,
    fontWeight:"bold"
},
add:{
  justifyContent:"center",
  alignSelf:"center",
  fontSize:10,
  top:580

},addtext:{
  fontSize:15,
 left:30
},
button:{
  backgroundColor:colors.buttoncolor
}

});

export default RegisterScreen;