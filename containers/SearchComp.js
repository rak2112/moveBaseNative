import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { Container, Header, Title, Button, Content, Input, Item, Text, Icon, View } from 'native-base';

export default class SearchComp extends PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <Title>Search Movies</Title>
        </Header>
        <Content>
          <Item style={{marginTop: 5}}>
            <Input placeholder='Search for your fav Movies!' onChangeText={(text) => console.log('i m being input', text)}/>
          </Item>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    title: {
      color: '#262626'
    },
    rating: {
      fontSize: 16,
      color: '#262626'
    },
    spinnerStyle:{
      color: '#00d573'
    }
});
