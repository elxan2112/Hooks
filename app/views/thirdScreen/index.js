import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ThirdScreen = ({navigation}) =>(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Second Screen')}>
            <Text>
                click
            </Text>
        </TouchableOpacity>
    </View>
)

export default ThirdScreen