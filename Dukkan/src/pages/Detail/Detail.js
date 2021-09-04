import React,{useCallback} from "react";
import {Text,View,Image } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import styles from "./Detail.style"
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


const Detail = ({route}) =>{
   const {id} =route.params
   const {loading,error,data} =useFetch(`${Config.API_URL}/${id}`)

   if (loading){
    return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:data.image}}  />
          <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price}TL</Text>
          </View>
        </View>
        
    )
}

export default Detail