import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const FirstScreen = ({navigation}) =>(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Third Screen')}>
            <Text>
                click
            </Text>
        </TouchableOpacity>
    </View>
)

export default FirstScreen