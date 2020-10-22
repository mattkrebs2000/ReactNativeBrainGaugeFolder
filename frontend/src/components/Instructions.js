import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Instructions" onPress={() => alert('Instructions!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
