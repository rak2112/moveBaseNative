import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Content, Tab, Button, Tabs, Text, Icon } from 'native-base';
import { TabNavigator, StackNavigator } from "react-navigation";
import { NavigationActions } from 'react-navigation'
import Movies from './Movies';
import Details from './Details';
import SearchComp from './SearchComp';
import globalStyles from './../styles/global';


export const MovieStack = StackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      title: 'Movies',
      headerBackTitle: null,
      headerStyle: globalStyles.backgroundGray,
      headerTitleStyle : globalStyles.detailHeader
    }
  },
  Details:{
    screen: Details,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: globalStyles.backgroundGray,
      headerTitleStyle : globalStyles.detailHeader,
      headerTintColor: '#ff5c00',
      headerBackTitleStyle: globalStyles.detailHeader
    })
  }
});
export default (MainScreenNavigator = TabNavigator(
  {
    Movies: { screen: MovieStack,  navigationOptions: {
        title: 'Moviessss',
        headerBackTitle: null,
        headerTitleStyle : globalStyles.detailHeader
      } },
    SearchComp: {screen: SearchComp, navigationOptions: {
      title: 'Browse',
      headerStyle: globalStyles.backgroundGray,
      headerBackTitle: null,
      headerTitleStyle: globalStyles.detailHeader
    }}
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Movies")}>
              <Icon name="film" />
              <Text>Movies</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('SearchComp', {date: new Date()}) }>
              <Icon name="search" />
              <Text>Browse</Text>
            </Button>

          </FooterTab>
        </Footer>
      );
    }
  }
));
