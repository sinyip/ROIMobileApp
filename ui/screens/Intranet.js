import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';


const Intranet = ({ }) => {
    return (
        <View style={{ margin: 20, marginTop: 100 }}>
            <Text style={{ color: '#c64c38', textAlign: 'center', fontFamily:'bold' ,marginTop: 20 , fontSize:'35px'}}>
                Stay Connect With Staff Intranet
            </Text>
            <Text>UserName : </Text>
            <TextInput placeholder=' Enter UserName/Email '
                onChangeText={(text) => { this.State({ name: text }) }}
                style={{ borderWidth: 3, borderColor: 'Navy', margin: 30 }} />

            <Text>Password : </Text>
            <TextInput placeholder='Enter Password'
                onChangeText={(text) => { this.State({ name: text }) }}
                style={{ borderWidth: 3, borderColor: 'Navy', margin: 30 }} />

            <Button style={{marginTop: 50}} title='Login' onPress={() => { this.login() }} />
        </View>
    )


}

export default Intranet