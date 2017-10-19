import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { Container, Header, Title, Button, Content, Input, Item, Text, Icon, View } from 'native-base';

const SearchInput = ({defaultInputValue, onChangeText}) => {
  return (
    <View>
      <Header>
        <Title>Search Movies!</Title>
      </Header>
        <Item>
          <Input
            type='text'
            placeholder='Search for your fav Movies!'
            value={defaultInputValue}
            onChangeText={onChangeText}/>
        </Item>
    </View>
  );
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

export default SearchInput;
