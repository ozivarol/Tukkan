import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Products from "./pages/Products"
import Detail from "./pages/Detail"
import Login from "./pages/Login"
import { useDispatch, useSelector } from "react-redux"
import Loading from "./components/Loading/Loading"
import Icon  from "react-native-vector-icons/MaterialCommunityIcons"
const Stack = createNativeStackNavigator();

function Router(){
  const userSession=useSelector(s => s.user)
  const isAuthLoading=useSelector(s => s.isAuthLoading)
  const dispatch = useDispatch()
  return(
  <NavigationContainer>
    
      {isAuthLoading ?(
        <Loading />
      ):!userSession ?(
          <Stack.Navigator>
            <Stack.Screen 
              name="LoginPage" 
              component={Login} 
              options={{headerShown:false}}
            />
          </Stack.Navigator>
        ):(
           <Stack.Navigator>
              <Stack.Screen 
                name="ProductsPage" 
                component={Products} 
                options={{
                  title:"Tükkan",
                  headerStyle:{backgroundColor:"#90caf9"},
                  headerTintColor: '#fff',
                  headerTitleStyle:{fontSize:20,fontWeight:"bold"},
                  headerTitleAlign:"center",
                  headerRight:() => <Icon name="logout" size={30} color="white" onPress={() => dispatch({type:'REMOVE_USER'})}/>,
                }}
              />
              <Stack.Screen 
                name="DetailPage"  
                component={Detail} 
                options={{
                  title:"Detay",
                  headerStyle:{backgroundColor:"#90caf9"},
                  headerTintColor: '#fff',
                  headerTitleStyle:{fontSize:20,fontWeight:"bold"},
                  headerTitleAlign:"center"}}/>
            </Stack.Navigator>      
           
          )}
  </NavigationContainer> )    
    
    
  
  
}


export default Router