import React,{useState,useEffect} from "react"
import {FlatList,View,Text } from "react-native";
import Config from "react-native-config";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import styles from "./Products.style"

const Products = ({navigation}) =>{
    const user = useSelector(s => s.user)
    const {loading,data,error} = useFetch(Config.API_URL)
    const HandelProductSelect = (id) =>{
        navigation.navigate("DetailPage",{id})


    }
    console.log(data)
    
    
    const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=> HandelProductSelect(item.id)} />;
    if (loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
       <View style={styles.container}>    
            <View style={styles.header_container}>
                <Text style={styles.header} >Hoş geldin: {user.name.firstname}</Text>
            </View>
            <FlatList data={data}renderItem={renderProduct}/>
        </View> 
        
    )
}

export default Products