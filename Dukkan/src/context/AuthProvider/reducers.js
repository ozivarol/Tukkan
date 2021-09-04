import AsyncStorage from "@react-native-async-storage/async-storage"
export default function reducer(state,action){
    switch (action.type) {
        case "SET_USER":
            const {user}=action.payload
            user ?
            AsyncStorage.setItem('@USER',JSON.stringify(user))
            : AsyncStorage.removeItem('@USER')
            return {...state,user}
        case 'REMOVE_USER':
            AsyncStorage.removeItem('@USER')
            return {...state,user:null} 
            
            
    
        default:
            return state
    }
}