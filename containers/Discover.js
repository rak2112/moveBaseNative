//@flow
import * as React from 'react';
import {paths} from './../constants/locationSvc';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { fetchingData, fetchMoreData } from './../actions/movieActions';
import DiscoverMovies from './../components/DiscoverMovies';


type Props = {
  +items: Array<{}>,
  navigation:{navigate(string, {}):void}
};

type State = {
  +discoverMovies: {
    +movies: Array<{}>
  }
};

export const Discover = (props: Props) => <DiscoverMovies {...props} />;

const mapStateToProps : MapStateToProps<*,*,*> = (state: State): {} => {
  const { discoverMovies } = state;
  const { movies:items } = discoverMovies;
  return {
    items
  };
}

export default connect(mapStateToProps)(Discover);
