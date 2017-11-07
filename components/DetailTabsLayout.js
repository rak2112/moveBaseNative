import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from './../styles/global';
import { Text, Icon, Tabs, Tab, TabHeading, } from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const defaultProps = {
  propHeading: PropTypes.string.isRequired,
  propVal: PropTypes.string.isRequired
};
const DetailTabsLayout = ({propHeading, propVal}) => {
  return (
    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#292b2c' }}>
      <Tab
        heading={ <TabHeading><MaterialIcons style={{fontSize: 25, color: '#ff5c00'}} name="face"></MaterialIcons><Text style={StyleSheet.flatten([globalStyles.detailHeader])}>Cast</Text></TabHeading>}>
        <Text> i am tab 1</Text>
      </Tab>
      <Tab
        activeTextStyle={{color: '#ff5c00'}}
        textStyle={{color: '#fff'}}
        heading={ <TabHeading><FontAwesome style={{fontSize: 25, color: '#ff5c00'}} name="video-camera"></FontAwesome><Text style={StyleSheet.flatten([globalStyles.orangeText])}>Crew</Text></TabHeading>}>
        <Text> i am tab 2</Text>
      </Tab>
      <Tab
        activeTextStyle={{color: '#ff5c00'}}
        textStyle={{color: '#fff'}}
        heading={ <TabHeading><FontAwesome style={{fontSize: 25, color: '#ff5c00'}} name="youtube-play"></FontAwesome><Text style={StyleSheet.flatten([globalStyles.orangeText])}>Trailers</Text></TabHeading>}>
        <Text> i am tab 3</Text>
      </Tab>
    </Tabs>
  )
};

DetailTabsLayout.defaultProps = defaultProps;

export default DetailTabsLayout;

const styles = StyleSheet.create({
  flex1Row: {
    flex:1,
    flexDirection: 'row',
    paddingBottom: 5
  },
  headingText: {
    color: '#ccc',
    fontSize: 14
  },
  attrsText: {
    flex: 7,
    color: '#ff5c00',
    fontSize: 15,
    fontWeight: '600'
  },
  rating: {
    marginRight: 3,
    fontSize: 16,
    color: '#ff5c00'
  },
  iconStyle: {
    fontSize: 15
  },
});
