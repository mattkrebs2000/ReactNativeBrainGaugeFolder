import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => (
    <>
        <Button title="Game" onPress={() => alert('Game!')} />
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
    </>
)
