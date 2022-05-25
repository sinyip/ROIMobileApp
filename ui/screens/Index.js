import {useState,useEffect} from 'react'; 
import {View,Text,Pressable,FlatList, Dimensions, Image} from 'react-native'; 
import {useNavigation,useRoute} from '@react-navigation/native'; 
import { getUsersAsync } from '../users.service';
import theme from '../theme';
import User from '../components/User';

export default function Index(){


    const screen = Dimensions.get("screen");

    //navigation
    const navigation = useNavigation(); 
    const route = useRoute(); 
    //state
    const [users,setUsers] = useState([])
    //use effect
    useEffect(()=>{

            switch(route.params?.op){
                case undefined:
                    getUsersAsync().then(json=>setUsers(json)); 
                    break; 
                case 'create':
                    setUsers([...users,route.params.data]); 
                    break; 
                case 'update':
                    setUsers(users.map(u => u.id == route.params.data.id ? route.params.data : u))
                    break; 
                case 'delete':
                    setUsers(users.filter(u=>u.id !== route.params.data.id)); 
                    break; 
            }

    },[route.params]); 


   
    //JSX
 
    return(
      <View>
           
            <Pressable style={theme.addContactButton} onPress={() => navigation.navigate("Create")}>
                <Text style={theme.addContactButtonText}>Add Contact</Text>
            </Pressable><View style={{ maxHeight: screen.height - 100 }}>
                <FlatList data={users} renderItem={u => <User user={u} />} keyExtractor={u => u.id} />
            </View>
           
        </View>
); 
}
 
