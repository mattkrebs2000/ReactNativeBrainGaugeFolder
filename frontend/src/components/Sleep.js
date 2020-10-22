import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Sleep" onPress={() => alert('Sleep!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
