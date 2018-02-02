//@flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon} from 'native-base';


type Props = {
  propHeading: string,
  propVal: string | number,
  rating?: boolean
};

const ListMovieLayout = ({propHeading, propVal, rating=false} : Props) => {
  const renderComp = (!rating) ? <Text style={StyleSheet.flatten([styles.attrsText])}>{propVal}</Text> :
    <Text style={StyleSheet.flatten([styles.rating])}>{propVal}<Icon style={StyleSheet.flatten([styles.rating, styles.iconStyle])} ios='ios-star' android="md-star" /></Text>;
  return (
    <View style={StyleSheet.flatten([styles.flex1Row])}>
      <Text style={StyleSheet.flatten([styles.attrsHeading])}>
        {propHeading}
      </Text>
      <Text style={StyleSheet.flatten([{flex:8}, styles.attrsText])}>{renderComp}</Text>
    </View>
  );
};

export default ListMovieLayout;

const styles = StyleSheet.create({
  flex1Row: {
    display:'flex',
    flex:1,
    flexDirection: 'row'
  },
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
