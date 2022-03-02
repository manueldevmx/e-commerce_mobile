//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Auth = () => {
    return (
        <View style={styles.container}>
            <Text>Auth</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
    },
});

//make this component available to the app
export default Auth;
