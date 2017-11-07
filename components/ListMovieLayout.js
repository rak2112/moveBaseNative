import React, {Component, PureComponent} from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text, Icon} from 'native-base';

const defaultProps = {
  propHeading: PropTypes.string.isRequired,
  propVal: PropTypes.string.isRequired
};
const ListMovieLayout = ({propHeading, propVal, rating=false}) => {
  const renderComp = (!rating) ? <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal}</Text> :
    <Text style={StyleSheet.flatten([styles.rating])}>{propVal}<Icon style={StyleSheet.flatten([styles.rating, styles.iconStyle])} ios='ios-star' android="md-star" /></Text>;
  return (
    <View style={{display:'flex', flex:1, flexDirection: 'row'}}>
      <Text style={StyleSheet.flatten([styles.attrsHeading])}>
        {propHeading}
      </Text>
      <Text style={StyleSheet.flatten([{flex:8}, styles.attrsText])}>{renderComp}</Text>
    </View>
  );
};

ListMovieLayout.defaultProps = defaultProps;

export default ListMovieLayout;

const styles = StyleSheet.create({
    attrsText: {
      flex:8,
      paddingLeft: 5,
      textAlign: 'left',
      color: '#cccccc',
      fontWeight: '600',
      fontSize: 15
    },
    attrsHeading: {
      display:'flex',
      flex:4,
      textAlign: 'left',
      color: '#696969',
      fontSize: 14
    },
    rating: {
      fontSize: 16,
      color: '#cccccc',
    },
    iconStyle: {
      fontSize: 15
    },
});
