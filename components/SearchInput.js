import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Header, Title, Input, Item, View } from 'native-base';

const defaultProps = {
  defaultInputValue: PropTypes.string,
  onChangeText: PropTypes.func.isRequired
}
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

SearchInput.defaultProps = defaultProps;
export default SearchInput;
