//@flow
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from './../styles/global';
import { View, Text, Icon } from 'native-base';
import MoviesPage from './MoviesPage';
import IosListLayout from './IosListLayout';

type Props = {
  crew: Array<{
    id: number,
    name: string
  }>,
};

const keyExtractor = (item, index): number => item.id;

class CrewListTab extends PureComponent <Props>{
  renderListItems = ({item}: Object): React$Node => (
    <IosListLayout item={item}/>
  );
  render() {
    const {crew: items} = this.props;
    return (
      <MoviesPage
        renderListItems={this.renderListItems}
        keyExtractor={keyExtractor}
        items = {items}/>
    );
  }
};

export default CrewListTab;
