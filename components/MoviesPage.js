//@flow
import React, {Component, PureComponent} from 'react';
import { FlatList } from 'react-native';
import { Container, View } from 'native-base';

type Props = {
  crew?: Array<{id: number, name: string}>,
  cast?: Array<{id: number, name: string}>,
  items: Array<{id: number, name: string}>,
  renderListItems(Object): React$Node,
  keyExtractor({id: number}, string):number,
  fetchNextPage: null | ()=>void,
  renderFooter: null | ()=>void,

};

const defaultProps = {
  fetchNextPage: null,
  renderFooter: null
};

const MoviesPage = ({items, renderListItems, keyExtractor, fetchNextPage, renderFooter}: Props): React$Node => {
  return (
    <Container style={{backgroundColor: '#323232', height: 'auto'}}>
      <FlatList
        numColumns={1}
        data={items}
        renderItem={renderListItems}
        keyExtractor={keyExtractor}
        onEndReached={fetchNextPage}
        ListFooterComponent = {renderFooter}
        onEndReachedThreshold={0.5}>
      </FlatList>
    </Container>
  );
};

MoviesPage.defaultProps = defaultProps;

export default MoviesPage;
