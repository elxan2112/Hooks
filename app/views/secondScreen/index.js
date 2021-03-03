import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SecondScreen = ({navigation}) =>(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('First Screen')}>
            <Text>
                click
            </Text>
        </TouchableOpacity>
    </View>
)

export default SecondScreen