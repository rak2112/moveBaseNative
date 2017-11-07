import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet} from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, View } from 'native-base';
import {paths} from './../constants/locationSvc';
import globalStyles from './../styles/global';
import DetailAttrsLayout from './DetailAttrsLayout';
import DetailGenresLayout from './DetailGenresLayout';
import DetailTabsLayout from './DetailTabsLayout';

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
  const statusPremier = {propHeading:{attr1: 'STATUS', attr2: 'PREMIERE'}, propVal:{attr1: props.details.status, attr2: props.details.release_date} };
  const ratingDuration = {propHeading:{attr1: 'DURATION', attr2: 'IMDB', rating: true}, propVal:{attr2: props.details.vote_average, attr1: `${props.details.runtime} Minutes`} };
  return (
    <Container style={StyleSheet.flatten([globalStyles.backgroundGray])}>
      <Content>
        <Card style={{flex: 1}}>
          <DetailGenresLayout {...props.details}/>
          <CardItem style={StyleSheet.flatten(styles.cardItemAttrs)}>
            <View style={{flex:1, flexDirection: 'column'}}>
              <DetailAttrsLayout {...statusPremier}/>
              <View  style={StyleSheet.flatten(styles.flex1Row)}>
                <Text style={StyleSheet.flatten([{flex:4}, styles.headingText])}>
                  IMDB:
                </Text>
                <Text style={StyleSheet.flatten([{flex:7.5}, styles.attrsText])}>
                  <Text style={StyleSheet.flatten([styles.rating, globalStyles.orangeText])}>{props.details.vote_average}<Icon style={StyleSheet.flatten([styles.rating, styles.iconStyle])} ios='ios-star' android="md-star" /></Text>
                </Text>
                <Text style={StyleSheet.flatten([{flex:5.5}, styles.headingText])}>
                  DURATION:
                </Text>
                <Text style={StyleSheet.flatten([styles.attrsText])}>
                  {props.details.runtime} Minutes
                </Text>
              </View>
            </View>
          </CardItem>

          <DetailTabsLayout/>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    tabBarUnderlineStyle: { backgroundColor: '#f65857' },
    textStyle: {
      color: '#ff5c00',
    },
    cardItemAttrs: {
      backgroundColor: '#292b2c',
      borderRadius:0
    },
    attrsText: {
      flex: 7,
      color: '#ff5c00',
      fontSize: 15,
      fontWeight: '600'
    },
    flex1Row: {
      flex:1,
      flexDirection: 'row',
      paddingBottom: 5
    },
    cardItemGenres: {
      backgroundColor: '#191919',
    },
    headingText: {
      color: '#ccc',
      fontSize: 14
    },
    rating: {
      marginRight: 3,
      fontSize: 15,
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

//TODO: layout changess...
// <DetailAttrsLayout {...ratingDuration}/>
