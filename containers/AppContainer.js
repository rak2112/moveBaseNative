//@flow
import React, { Component, PureComponent } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { TabNavigator, StackNavigator } from "react-navigation";
import Movies from './Movies';
import ExploreMovies from './ExploreMovies';
import Discover from './Discover';
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
      tabBarVisible: false,
      headerBackTitleStyle: globalStyles.detailHeader
    })
  }
});

export const DiscoverStack = StackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      title: 'Discover',
      headerBackTitle: null,
      headerStyle: globalStyles.backgroundGray,
      headerTitleStyle : globalStyles.detailHeader
    }
  },
  ExploreMovies : {
    screen: ExploreMovies,
    navigationOptions: {
      title: 'Explore Movies',
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
      tabBarVisible: false,
      headerBackTitleStyle: globalStyles.detailHeader
    })
  }
});

type Props = {
  navigation: {
    navigate(string, ?Object): void
  },
  navigationState: {
    index: number
  }
};

class TabComp extends PureComponent <Props> {
  render () {
    const { navigation, navigationState:{index} } = this.props;
      return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => (index!==0) ? navigation.navigate("Movies") : null}>
            <Icon name="home" style={{fontSize: 25, color: '#ff5c00'}} active={index === 0} />
          </Button>
          <Button
            vertical
            onPress={() => (index!==1) ? navigation.navigate("Discover") : null }>
            <Icon name="film" style={{fontSize: 25, color: '#ff5c00'}} active={index === 1} />
          </Button>

          <Button
            vertical
            onPress={() => (index!==2) ? navigation.navigate('SearchComp', {date: new Date()}): null }>
            <Icon name="search" style={{fontSize: 25, color: '#ff5c00'}} active={index === 2} />
          </Button>

        </FooterTab>
      </Footer>
    );
  }
};

// $FlowFixMe
export default (MainScreenNavigator = TabNavigator(
  {
    Movies: {
      screen: MovieStack,
      navigationOptions: {
        title: 'Moviessss',
        headerBackTitle: null,
        headerTitleStyle : globalStyles.detailHeader
      }
    },
    Discover: {
      screen: DiscoverStack,
      navigationOptions: {
        title: 'Discover',
        headerStyle: globalStyles.backgroundGray,
        headerBackTitle: null,
        headerTitleStyle: globalStyles.detailHeader
      }
    },
    SearchComp: {
      screen: SearchComp,
      navigationOptions: {
        title: 'Browseee',
        headerStyle: globalStyles.backgroundGray,
        headerBackTitle: null,
        headerTitleStyle: globalStyles.detailHeader
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: TabComp
  }

));
