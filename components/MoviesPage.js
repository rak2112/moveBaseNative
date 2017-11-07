import React, {Component, PureComponent} from 'react';
import { FlatList } from 'react-native';
import { Container, View } from 'native-base';
const MoviesPage = ({items, renderListItems, keyExtractor, fetchNextPage, renderFooter}) => {
  return (
    <Container style={{backgroundColor: '#323232'}}>
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
