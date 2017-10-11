import React, {Component, PureComponent} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Left, Right, Thumbnail, Body, Text, Icon } from 'native-base';
import {paths} from './../constants/locationSvc';

export default class MovieInList extends PureComponent {
  getDetails(data) {
    this.props.navigation.navigate('Details', data)
  }
  render() {
    return (
      <ListItem avatar>
        <TouchableOpacity style={StyleSheet.flatten(styles.gridItem)}
        onPress={()=>this.getDetails(this.props.item)}>
          <Left>
            <Thumbnail style={StyleSheet.flatten(styles.gridItemImage)} source={{ uri: paths['imgPath185']+this.props.item.backdrop_path }} />
          </Left>
          <Body>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={StyleSheet.flatten(styles.title)}>{this.props.item.title}</Text>
            <Text numberOfLines={2} ellipsizeMode={'tail'} note>{this.props.item.overview}</Text>
          </Body>
          <Right>
            <Text style={StyleSheet.flatten(styles.rating)}>{this.props.item.vote_average}<Icon style={StyleSheet.flatten(styles.rating)} ios='ios-star' android="md-star" /></Text>
          </Right>
        </TouchableOpacity>
      </ListItem>
    );
  }
};

const styles = StyleSheet.create({
    title: {
      color: '#262626'
    },
    rating: {
      fontSize: 16,
      color: '#262626'
    },
    gridItem: {
        flexDirection: 'row',
        margin: 3
    },
    gridItemImage: {
        width: 70,
        height: 60
    }
});
