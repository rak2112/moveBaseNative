import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from './../styles/global';
import { View, Text, Icon} from 'native-base';

const defaultProps = {
  propHeading: PropTypes.string.isRequired,
  propVal: PropTypes.string.isRequired
};
const DetailAttrsLayout = ({propHeading, propVal}) => {
  const ratedAttr = (propHeading.rating) ? <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal.attr2}<Icon style={StyleSheet.flatten([styles.rating, styles.iconStyle])} ios='ios-star' android="md-star" /></Text> :
  <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal.attr2}</Text>;
  return (
    <View  style={StyleSheet.flatten(styles.flex1Row)}>
      <Text style={StyleSheet.flatten([{flex:4}, styles.headingText])}>{propHeading.attr1}:</Text>
      <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal.attr1}</Text>
      <Text style={StyleSheet.flatten([{flex:5}, styles.headingText])}>{propHeading.attr2}:</Text>
      <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal.attr2}</Text>
    </View>
  )
};

DetailAttrsLayout.defaultProps = defaultProps;

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
