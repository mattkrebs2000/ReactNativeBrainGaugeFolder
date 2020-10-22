import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Hunger" onPress={() => alert('Hunger!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
