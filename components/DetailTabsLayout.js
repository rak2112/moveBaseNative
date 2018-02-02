//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import globalStyles from './../styles/global';
import { Text, Tabs, Tab, TabHeading, } from 'native-base';
import CastListTab from './CastListTab'
import CrewListTab from './CrewListTab';
import TrailerTab from './TrailerTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  cast: Array<{id: number, name: string}>,
  crew: Array<{id: number, name: string}>,
  videos: Array<{id: number, key: string}>
};

const DetailTabsLayout = ({cast, crew, videos}: Props) => {
  return (
    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#ff5c00' }}>
      <Tab
        heading={ <TabHeading style={StyleSheet.flatten([styles.tabBackground])}><MaterialIcons style={StyleSheet.flatten([styles.tabIcon])} name="face"></MaterialIcons><Text style={StyleSheet.flatten([globalStyles.orangeText])}>Cast</Text></TabHeading>}>
        <CastListTab cast={cast}/>
      </Tab>
      <Tab
        activeTextStyle={{color: '#ff5c00'}}
        textStyle={{color: '#fff'}}
        heading={ <TabHeading style={StyleSheet.flatten([styles.tabBackground])}><FontAwesome style={StyleSheet.flatten([styles.tabIcon])} name="video-camera"></FontAwesome><Text style={StyleSheet.flatten([globalStyles.orangeText])}>Crew</Text></TabHeading>}>
        <CrewListTab crew={crew}/>
      </Tab>
      <Tab
        activeTextStyle={{color: '#ff5c00'}}
        textStyle={{color: '#fff'}}
        heading={ <TabHeading style={StyleSheet.flatten([styles.tabBackground])}><FontAwesome style={StyleSheet.flatten([styles.tabIcon])} name="youtube-play"></FontAwesome><Text style={StyleSheet.flatten([globalStyles.orangeText])}>Trailers</Text></TabHeading>}>
        <TrailerTab videos={videos}/>
      </Tab>
    </Tabs>
  )
};

export default DetailTabsLayout;

const styles = StyleSheet.create({
  tabBackground: {
    backgroundColor: '#000'
  },
  tabIcon: {
    color: '#ccc',
    fontSize: 25
  }
});
