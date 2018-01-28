import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class Button1 extends Component {
    _buttonPress() {
        //Do something
        Alert.alert('A button was pressed')
    }

    render() {
        return (
            <View style={styles.container1}>
                <TouchableOpacity onPress={this._buttonPress}
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        paddingTop: 40,
        alignItems: 'left'
    },
    button1: {
        marginBottom: 25,
        width: 150,
        alignItems: 'left'
    }
    buttonText: {
        padding: 20,
        color: 'white'
    }
})