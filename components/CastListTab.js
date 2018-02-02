//@flow
import React, { PureComponent } from 'react';
import MoviesPage from './MoviesPage';
import IosListLayout from './IosListLayout';

type Props = {
  cast: Array<{
    id: number,
    name: string
  }>,
  // renderListItems(Object): React$Node,
  // keyExtractor({id: number}, string):number,
};

const keyExtractor = (item, index): number => item.id;

class CastListTab extends PureComponent <Props> {
  renderListItems = ({item}: Object): React$Node => (
    <IosListLayout item={item}/>
  );
  render() {
    const {cast: items} = this.props;
    return (
      <MoviesPage
        renderListItems={this.renderListItems}
        keyExtractor={keyExtractor}
        items = {items}/>
    );
  }
};


export default CastListTab;
