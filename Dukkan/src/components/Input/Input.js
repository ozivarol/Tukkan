import React from "react"
import { TextInput,View } from "react-native"
import styles from "./Input.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({placeholder,value,onType,iconName,isSecure}) =>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure}/>
            <Icon name={iconName} size={30} color="gray" />
        </View>

    )
}

export default Input