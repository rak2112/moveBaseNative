//@flow
import React, {Component, PureComponent} from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, View, H3, Text } from 'native-base';

import {paths} from './../constants/locationSvc';
import globalStyles from './../styles/global';
import ListMovieLayout from './ListMovieLayout';

type Props = {
  navigation:{
    state:{
      params:{
        id?: string,
        bColor?: string,
        type?: string,
        date?: Date
      }
    },
    navigate(string, {}): void
  },
  item: {
    title: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number
  }
};

export default class MovieInList extends PureComponent <Props>{
  getDetails(data: Object) {
    this.props.navigation.navigate('Details', data);
  }
  render() {
    const {navigation:{state:{params}}, item} = this.props;
    const bColor = (params) ? params.bColor : '#000';
    return (
      <ListItem style={StyleSheet.flatten(styles.listItemView)}>
        <TouchableOpacity style={StyleSheet.flatten([styles.gridItem, {borderColor: bColor}])}
        onPress={()=>this.getDetails(item)}>
          <View style={{flex:1, flexDirection: 'column'}}>
            <View  style={StyleSheet.flatten(styles.flex1Row)}>
              <Image style={StyleSheet.flatten([{flex:4}, styles.gridItemImage])} source={{ uri: `${paths['imgPath300']}${item.backdrop_path}` }} />
              <View style={StyleSheet.flatten(styles.flex8Col)}>
                <H3 numberOfLines={1} ellipsizeMode={'tail'} style={StyleSheet.flatten(styles.title)}>{item.title}</H3>
                <ListMovieLayout propHeading= {'Status'} propVal={'Released'} />
                <ListMovieLayout propHeading= {'Premiere'} propVal={item.release_date} />
                <ListMovieLayout propHeading= {'Duration'} propVal={'120 mins'}/>
                <ListMovieLayout propHeading= {'IMDB'} propVal={item.vote_average} rating={true}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ListItem>
    );
  }
};

const styles = StyleSheet.create({
    title: {
      flex:1,
      color: '#ccc',
      fontSize: 20,
      fontWeight: '600',
      paddingLeft:20
    },
    listItemView: {
      marginBottom:5,
      marginRight:0,
      marginTop: 0,
      marginLeft:0,
      justifyContent: 'center',
      paddingBottom:0,
      paddingRight:0,
      paddingTop: 0,
      paddingLeft: 0
    },
    gridItem: {
      flexDirection: 'row',
      borderColor: '#000000',
      borderBottomWidth: 2,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 0
      //transform:[{ skewX: '0deg' }, { skewY: '-20deg'}, {translateY: 10}]
    },
    gridItemImage: {
        width: 70,
        height: 120,
        borderRadius: 4
    },
    flex1Row: {
      flex:1,
      flexDirection: 'row',
      paddingBottom: 5
    },
    flex8Col: {
      flex:8,
      paddingLeft: 8,
      flexDirection: 'column'
    }
});
