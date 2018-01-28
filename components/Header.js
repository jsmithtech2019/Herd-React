import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class HeaderTop extends Component {
  render() {
    return (
        <Header>
          <Left/>
          <Body>
            <Title>Herd</Title>
          </Body>
          <Right/>
        </Header>
    );
  }
}