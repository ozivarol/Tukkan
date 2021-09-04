import React from "react"
import { SafeAreaView,Text,View,Image, Alert } from "react-native"
import styles from "../Login/Login.style"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { Formik } from "formik"
import Config from "react-native-config"
import usePost from "../../hooks/usePost/usePost"
import {useDispatch} from "react-redux"

const Login = ({navigation}) =>{
    const {data,loading,error,post} =usePost()
    const dispatch = useDispatch()
    function handleLogin(values){
        post(Config.API_LOGIN_URL+'/login',values)
    }
    if(error){
        Alert.alert('Tükkan','Kullanıcı bulunamadı!')
    }
    if(data){
        if(data.status === "Error"){
            Alert.alert('Tükkan','Kullanıcı bulunamadı!')
        }
        
        else{
            dispatch({type:'SET_USER',payload:{user}})
            
            navigation.navigate("ProductsPage")

        }
    }

    return(
        <SafeAreaView style={styles.container}>
          <Image style={styles.logo} source={require("../../asset/icon.png")} />
          <Formik initialValues={{username:"",password:""}} onSubmit={handleLogin}>
              
              {({handleSubmit,handleChange,values}) =>(
                  <View style={styles.logo_container}>
                    <Input placeholder="Kullanıcı Adını Giriniz" value={values.username} onType={handleChange("username")} iconName="account"/>
                    
                    <Input placeholder="Şifrenizi giriniz" value={values.password} onType={handleChange("password")} iconName="key" isSecure/>
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                  </View>)

              }
            
           </Formik>

        </SafeAreaView>
    )
    
}

export default Login

const user = {
    "address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0

}