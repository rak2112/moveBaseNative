//@flow
import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem, Text } from 'native-base';

type Props = {
  item: {
    title: string,
    backdrop_path: string,
    release_date: string,
    type: string,
    name: string,
    bColor: string
  },
  getMovieType({}): void
};

const IMAGES = {
  // $FlowFixMe
  action: require('./../images/blueAbsReady.jpg'), // $FlowFixMe
  latest: require('./../images/holiReady.jpg'), // $FlowFixMe
  upComing: require('./../images/greatFulColorReady.jpg'), // $FlowFixMe
  popular: require('./../images/poplarReady.jpg'), // $FlowFixMe
  comedy: require('./../images/waterColorReady.jpg'), // $FlowFixMe
  inCinemas: require('./../images/greenReady.jpg'), // $FlowFixMe
  topRated: require('./../images/purpleBubleReady.jpg')
};


const MovieType = ({item, getMovieType}: Props) => {
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
          <Text style={StyleSheet.flatten(styles.textStyle)}>{item.name.toUpperCase()}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ListItem>
  );
};

export default MovieType;

const styles = StyleSheet.create({
  listItemView: {
    borderWidth: 4,
    borderBottomWidth: 4,
    borderRadius: 15,
    height: 95,
    marginBottom: 0,
    marginRight:15,
    marginTop: 10,
    marginLeft:15,
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
  },
  textStyle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 0
  }

});
