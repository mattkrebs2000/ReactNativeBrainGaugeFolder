import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Survey" onPress={() => alert('Survey!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
