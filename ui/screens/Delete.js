import {View,Text,Pressable,StyleSheet} from 'react-native'; 
import {useRoute,useNavigation} from '@react-navigation/native'; 
import {deleteUserAsync} from '../users.service'
import theme from '../theme';

export default function Delete(){
 
    //navigation
    const navigation = useNavigation(); 
    const route = useRoute(); 
    let u = route.params; 
    //functions
    function submit(){
      deleteUserAsync(u.id)
        .then(response=>{
            if(response.status === 204){
                navigation.navigate("Index",{op:'delete',data:u}); 
            }
        }); 
    }

    let deleteButtonStyle = {...StyleSheet.flatten(theme.saveButton),backgroundColor:'red'}; 

   
    //JSX
    return (
        <View>
            <Text>Are you sure you want to delete this user?</Text>
            <Text>NAME:</Text>
            <Text>{u.firstName} {u.lastName}</Text>
            <Text>PHONE:</Text>
            <Text>{u.phone}</Text>
            <Text>ADDRESS:</Text>
            <Text>STREET:</Text>
            <Text>{u.address.street}</Text>
            <Text>SUBURB:</Text>
            <Text>{u.address.suburb}</Text>
            <Pressable style={deleteButtonStyle} onPress={submit}>
                <Text style={theme.saveButtonText}>Delete</Text>
            </Pressable>  
        </View>
    ); 
}