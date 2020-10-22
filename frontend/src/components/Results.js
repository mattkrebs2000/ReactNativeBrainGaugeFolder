import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Results" onPress={() => alert('Results!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
