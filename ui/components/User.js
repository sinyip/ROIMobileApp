import {View,Text,Pressable} from 'react-native'; 
import {useNavigation} from '@react-navigation/native'; 
import theme from '../theme';

export default function User(props){

    //navigation
    const navigation = useNavigation();
    let user = props.user.item;  

    return(
        <View style={theme.userTile}>
            <View>
                <Text>{user.firstName} {user.lastName}</Text>
            </View>
            <View style={theme.userTileButtonContainer}>
                <Pressable style={theme.userTileButton} onPress={()=> navigation.navigate("Details",user)}>
                    <Text style={theme.userTileButtonText}>Details</Text>
                </Pressable>
                <Pressable style={theme.userTileButton} onPress={()=> navigation.navigate("Edit",user)}>
                    <Text style={theme.userTileButtonText}>Edit</Text>
                </Pressable>
                <Pressable style={theme.userTileButton} onPress={()=> navigation.navigate("Delete",user)}>
                    <Text style={theme.userTileButtonText}>Delete</Text>
                </Pressable>
            </View>         
        </View>
    ); 
}