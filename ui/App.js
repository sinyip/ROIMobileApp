import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Intranet from './screens/Intranet';
import Index from './screens/Index';
import Create from './screens/Create';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Delete from './screens/Delete';




export default function App(){

  const Stack = createNativeStackNavigator();
  return(
 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ ...ho, title: 'Welcome to ROI' }} />
        <Stack.Screen name="Intranet" component={Intranet} options={{ ...ho, title: 'Welcome to ROI Intranet' }} />
        <Stack.Screen name="Index" component={Index} options={{ ...ho, title: 'My Contacts' }} />
        <Stack.Screen name="Create" component={Create} options={{ ...ho, title: 'Add Contact' }} />
        <Stack.Screen name="Details" component={Details} options={{ ...ho, title: 'Contact Details' }} />
        <Stack.Screen name="Edit" component={Edit} options={{ ...ho, title: 'Update Contact' }} />
        <Stack.Screen name="Delete" component={Delete} options={{ ...ho, title: 'Delete Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





let ho = {
  headerStyle: {
    backgroundColor: '#941a1d',
  },
  headerTintColor: '#262626',
  headerTitleStyle: {
    fontWeight: 'bold',
    color:'#fff',
    justifyContent:'center', alignItems:'center',

  },
}; 
