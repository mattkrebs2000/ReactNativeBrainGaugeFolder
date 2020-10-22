import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Exercise" onPress={() => alert('Exercise!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
