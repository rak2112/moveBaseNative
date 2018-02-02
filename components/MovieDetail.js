//@flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ImageBackground} from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, View } from 'native-base';
import {paths} from './../constants/locationSvc';
import globalStyles from './../styles/global';
import DetailAttrsLayout from './DetailAttrsLayout';
import DetailGenresLayout from './DetailGenresLayout';
import DetailTabsLayout from './DetailTabsLayout';

type Props = {
  isFetching: boolean,
  details: {
    title: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
    overview: string,
    status: string,
    runtime: string,
    genres: Array<{
      id: number,
      name: string
    }>
  },
  cast: Array<{id: number, name: string}>,
  crew: Array<{id: number, name: string}>,
  videos: {
    results: Array<{id: number, key: string}>
  }
};
const MovieDetail = (props: Props) => { console.log('propssssss in detailsssss', props);
  const videoDetails = {
    videos: props.videos.results,
    cast: props.cast,
    crew: props.crew
  };
  const statusPremier = {propHeading:{icon1: 'film', icon2: 'calendar'}, propVal:{attr1: props.details.status, attr2: props.details.release_date} };
  const ratingDuration = {propHeading:{attr2: 'DURATION', attr1: 'IMDB', icon2: 'clock-o', icon1: 'star', rating: true}, propVal:{attr1: props.details.vote_average, attr2: `${props.details.runtime} Minutes`} };
  return (
    <Container style={StyleSheet.flatten([globalStyles.backGroundBlack])}>
     <Content>
      <ImageBackground
        source={{uri: `${paths['posterPath780']}${props.details.poster_path}`}}
        style={{backgroundColor: 'transparent',
        flex: 1,
        opacity: 0.9,
        width: '100%',
        height: '50%',
        alignSelf: 'flex-start'}}>
        <Card style={StyleSheet.flatten(styles.cardStyle)}>
          <DetailGenresLayout {...props.details}/>
          <CardItem style={StyleSheet.flatten(styles.cardItemAttrs)}>
            <View style={{flex:1, flexDirection: 'column', opacity: 1}}>
              <DetailAttrsLayout {...statusPremier}/>
              <DetailAttrsLayout {...ratingDuration}/>
            </View>
          </CardItem>

          <DetailTabsLayout {...videoDetails}/>
        </Card>
      </ImageBackground>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  backgrondStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    opacity: 0.9,
    height: '50%',
    alignSelf: 'flex-start'
  },
  cardStyle: {
    flex: 1,
    marginTop: 300,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'transparent'
  },
  cardItemAttrs: {
    backgroundColor: '#292b2c',
    opacity: 0.7,
    borderRadius:0
  }
});

export default MovieDetail;
