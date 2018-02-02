//@flow
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Header, Title, Input, Item, View } from 'native-base';

type Props = {
  defaultInputValue: string,
  onChangeText: (string)=>void
};
const SearchInput = ({defaultInputValue, onChangeText}: Props) => {
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

export default SearchInput;
