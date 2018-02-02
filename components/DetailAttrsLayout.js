//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import globalStyles from './../styles/global';
import { View, Text, Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  propHeading: {
    icon1: string,
    icon2: string
  },
  propVal: {
    attr1: string | number,
    attr2: string | number
  }
}
const DetailAttrsLayout = ({propHeading, propVal}: Props) => {
  return (
    <View  style={StyleSheet.flatten(styles.flex1Row)}>
      <Text style={StyleSheet.flatten([{flex:2}, styles.headingText])}><FontAwesome style={StyleSheet.flatten([styles.tabIcon])} name={propHeading.icon1}></FontAwesome></Text>
      <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal.attr1}</Text>
      <Text style={StyleSheet.flatten([{flex:2}, styles.headingText])}><FontAwesome style={StyleSheet.flatten([styles.tabIcon])} name={propHeading.icon2}></FontAwesome></Text>
      <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal.attr2}</Text>
    </View>
  )
};

export default DetailAttrsLayout;

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
    flex: 8,
    color: '#ff5c00',
    fontSize: 15,
    fontWeight: '600'
  },
  tabIcon: {
    color: '#ccc',
    fontSize: 20
  },
});
