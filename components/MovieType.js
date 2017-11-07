import React, {Component, PureComponent} from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageBackground, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, View, H3, Text, Icon } from 'native-base';

import EvilIcons from 'react-native-vector-icons/EvilIcons'

//import {IMAGES} from './../constants/locationSvc';
import globalStyles from './../styles/global';
import ListMovieLayout from './ListMovieLayout';

const defaultProps = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,

  })
};

const IMAGES = {
  action: require('./../images/blueAbsReady.jpg'),
  latest: require('./../images/holiReady.jpg'),
  upComing: require('./../images/greatFulColorReady.jpg'),
  popular: require('./../images/poplarReady.jpg'),
  comedy: require('./../images/waterColorReady.jpg'),
  inCinemas: require('./../images/greenReady.jpg'),
  topRated: require('./../images/purpleBubleReady.jpg')

};


const MovieType = ({item, getMovieType}) => {
  return (
    <ListItem style={StyleSheet.flatten([{backgroundColor: item.bColor, borderWidth: 2, shadowColor: '#000', borderColor: item.bColor}, styles.listItemView])}>
      <TouchableOpacity
        onPress= { ()=> getMovieType(item)}
        style={StyleSheet.flatten(styles.gridItem)}>
        <ImageBackground
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            opacity: 0.9,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={IMAGES[item.type]}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '600', textAlign: 'center', paddingTop: 0}}>{item.name.toUpperCase()}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ListItem>
  );
};

export default MovieType;

const styles = StyleSheet.create({
    listItemView: {
      borderBottomWidth: 2,
      borderRadius: 5,
      height: 90,
      marginBottom: 0,
      marginRight:15,
      marginTop: 10,
      marginLeft:15,
      //justifyContent: 'center',
      paddingBottom:0,
      paddingRight:0,
      paddingTop: 0,
      paddingLeft: 0,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 1

    },
    gridItem: {
      flexDirection: 'column',
      flex:1
    }
});

// <EvilIcons style={{fontSize: 30}} name="chevron-right"></EvilIcons>

// skew Image implemented
// <TouchableOpacity style={StyleSheet.flatten(styles.gridItem)}>
// <Image source={require('./../images/blueAbsImg.jpg')} />
//   <View style={{flex:1, flexDirection: 'row', height:90, backgroundColor: item.sColor, transform:[ { skewY: '-7deg'}, {translateY: -22}]}}>
//     <View style={{flex:1, transform:[{ skewY: '7deg'}]}}>
//       <Text style={{color: '#ff5c00', fontWeight: '600', fontSize: 24, textAlign: 'center', paddingTop: 40, transform:[{ skewY: '0deg'}]}}>{item.name}<EvilIcons style={{fontSize: 20}} name="chevron-right"></EvilIcons></Text>
//     </View>
//   </View>
// </TouchableOpacity>
