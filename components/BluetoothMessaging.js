import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Alert, Text } from 'react-native';


export default class BluetoothMessaging extends Component {
  _search() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
        <Button large primary onPress={this._search}>
          <Text>Bluetooth </Text>
        </Button>
    );
  }
}