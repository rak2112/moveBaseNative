import React, {Component, PureComponent} from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
const MoviesPage = ({items, renderListItems, keyExtractor, fetchNextPage, renderFooter}) => {
  return (
    <Container style={{backgroundColor: '#E8E8E8', flex: 1}}>
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
export default MoviesPage;
