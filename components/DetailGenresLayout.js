import React, {Component, PureComponent} from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from './../styles/global';
import { View, Text, Icon, CardItem, Body} from 'native-base';
import {paths} from './../constants/locationSvc';
const win = Dimensions.get('window');

const defaultProps = {
  propHeading: PropTypes.string.isRequired,
  propVal: PropTypes.string.isRequired
};
const DetailGenresLayout = ({genres, backdrop_path: uri, overview}) => {
  return (
    <View>
      <Image source={{uri: paths['imgPath500']+uri }} style={StyleSheet.flatten(styles.heroImage)}/>
      <CardItem style={StyleSheet.flatten([styles.cardItemGenres])}>
        <View style={{flex:2, flexDirection: 'row'}}>
          <Icon name="film" style={StyleSheet.flatten([styles.rating])}/>
          <Text style={{flex:1}} numberOfLines={1} ellipsizeMode={'tail'}>
            {
              genres.map((item, index)=>{
                if(index !== genres.length-1) {
                  return <Text key={index} style={StyleSheet.flatten(styles.genres)}>{item.name} | </Text>
                }
                else {
                  return <Text key={index} style={StyleSheet.flatten(styles.genres)}>{item.name}</Text>
                }
              })
            }
          </Text>
        </View>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={StyleSheet.flatten([])}>
            {overview}
          </Text>
        </Body>
      </CardItem>
    </View>
  )
};

DetailGenresLayout.defaultProps = defaultProps;

export default DetailGenresLayout;

const styles = StyleSheet.create({
  heroImage: {
    height: 250,
    width: win.width-5,
    flex: 1,
    alignSelf: 'stretch'
  },
  cardItemGenres: {
    borderRadius:0,
    backgroundColor: '#191919',
  },
  rating: {
    marginRight: 5,
    fontSize: 20,
    color: '#ff5c00'
  },
  genres: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff5c00'
  },
});
