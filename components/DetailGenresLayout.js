//@flow
import React, {Component, PureComponent} from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon, CardItem, Body} from 'native-base';

type Props = {
  +title: string,
  +release_date?: string,
  +vote_average?: number,
  +poster_path: string,
  +overview: string,
  +status?: string,
  +runtime?: string,
  +genres: Array<{
    id: number,
    name: string
  }>
};

const DetailGenresLayout = ({genres, overview}: Props) => {
  return (
    <View>
      <CardItem style={StyleSheet.flatten([styles.cardItemGenres])}>
        <View style={{flex:2, flexDirection: 'row'}}>
          <Icon name="film" style={StyleSheet.flatten([styles.rating])}/>
          <Text style={StyleSheet.flatten([styles.textStyle])} numberOfLines={1} ellipsizeMode={'tail'}>
            {
              genres.map((item, index)=>{
                if(index !== genres.length-1) {
                  return <Text key={item.id} style={StyleSheet.flatten(styles.genres)}>{item.name} | </Text>
                }
                else {
                  return <Text key={item.id} style={StyleSheet.flatten(styles.genres)}>{item.name}</Text>
                }
              })
            }
          </Text>
        </View>
      </CardItem>
      <CardItem style={StyleSheet.flatten([styles.overViewBackground])}>
        <Body>
          <Text style={StyleSheet.flatten([styles.bodyText])}>
            {overview}
          </Text>
        </Body>
      </CardItem>
    </View>
  )
};


export default DetailGenresLayout;

const styles = StyleSheet.create({
  cardItemGenres: {
    borderRadius:0,
    backgroundColor: '#191919',
    opacity: 0.7
  },
  rating: {
    marginRight: 5,
    fontSize: 20,
    color: '#ff5c00'
  },
  textStyle: {
    flex:1,
    opacity: 1
  },
  bodyText: {
    color: '#fff',
    opacity: 1
  },
  overViewBackground: {
    backgroundColor: '#000',
    opacity: 0.7
  },
  genres: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff5c00'
  },
});
