import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions, StyleSheet} from 'react-native';
import { Container, Spinner, Header, Content, Card, CardItem, Text, Icon, Body, View } from 'native-base';
import {paths} from './../constants/locationSvc';
import globalStyles from './../styles/global';
const win = Dimensions.get('window');

const defaultProps = {
  isFetching: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  })
};
const MovieDetail = (props) => {
  return (
    <Container style={StyleSheet.flatten(globalStyles.backgroundGray)}>
      <Content>
        <Card style={{flex: 1}}>
          <Image source={{uri: paths['imgPath500']+props.details.backdrop_path }} style={StyleSheet.flatten(styles.heroImage)}/>
          <CardItem>
            <Body>
              <Text style={StyleSheet.flatten([styles.textBody, globalStyles.fontSize14])}>
                {props.details.overview}
              </Text>
            </Body>
          </CardItem>
          <CardItem style={StyleSheet.flatten(styles.cardItemAttrs)}>
            <View style={{flex:1, flexDirection: 'column'}}>
              <View  style={StyleSheet.flatten(styles.flex1Row)}>
                <Text style={StyleSheet.flatten([{flex:4}, globalStyles.darkGrayText, globalStyles.fontSize13])}>
                  STATUS:
                </Text>
                <Text style={StyleSheet.flatten([styles.attrsText])}>
                  {props.details.status}
                </Text>
                <Text style={StyleSheet.flatten([{flex:5}, globalStyles.darkGrayText, globalStyles.fontSize13])}>
                  PREMIERE:
                </Text>
                <Text style={StyleSheet.flatten([styles.attrsText])}>
                  {props.details.release_date}
                </Text>
              </View>
              <View  style={StyleSheet.flatten(styles.flex1Row)}>
                <Text style={StyleSheet.flatten([{flex:4}, globalStyles.darkGrayText, globalStyles.fontSize13])}>
                  IMDB:
                </Text>
                <Text style={StyleSheet.flatten([{flex:7.5}, globalStyles.orangeText, globalStyles.fontSize13])}>
                  <Text style={StyleSheet.flatten([styles.rating, globalStyles.orangeText])}>{props.details.vote_average}<Icon style={StyleSheet.flatten([styles.rating, styles.iconStyle])} ios='ios-star' android="md-star" /></Text>
                </Text>
                <Text style={StyleSheet.flatten([{flex:5.5}, globalStyles.darkGrayText, globalStyles.fontSize13])}>
                  DURATION:
                </Text>
                <Text style={StyleSheet.flatten([styles.attrsText])}>
                  {props.details.runtime} Minutes
                </Text>
              </View>
            </View>
          </CardItem>

          <CardItem style={StyleSheet.flatten([styles.cardItemAttrs, styles.cardItemGenres])}>
            <View style={{flex:2, flexDirection: 'row'}}>
              <Icon name="film" style={StyleSheet.flatten([styles.rating, styles.iconStyle])}/>
              {
                props.details.genres.map((item, index)=>{
                  if(index !== props.details.genres.length-1) {
                    return <Text key={index} style={StyleSheet.flatten(styles.genres)}>{item.name} | </Text>
                  }
                  else {
                    return <Text key={index} style={StyleSheet.flatten(styles.genres)}>{item.name}</Text>
                  }
                })
              }
            </View>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    heroImage: {
      height: 250,
      width: win.width-5,
      flex: 1,
      alignSelf: 'stretch'
    },
    cardItemAttrs: {
      backgroundColor: '#292b2c',
      borderRadius:0
    },
    attrsText: {
      flex: 7,
      color: '#ff5c00',
      fontSize: 13
    },
    flex1Row: {
      flex:1,
      flexDirection: 'row',
      paddingBottom: 5
    },
    cardItemGenres: {
      backgroundColor: '#191919',
    },
    genres: {
      fontSize: 13,
      color: '#ff5c00'
    },
    rating: {
      marginRight: 3,
      fontSize: 13,
      color: '#ff5c00'
    },
    iconStyle: {
      fontSize: 15
    },
    textBody: {
      paddingTop: 3
    }
});

MovieDetail.defaultProps = defaultProps;
export default MovieDetail;
