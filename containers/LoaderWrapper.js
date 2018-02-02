//@flow
import React, { PureComponent } from 'react';
import type { ComponentType } from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'native-base';

type Props = {
  isFetching: boolean,
  items: Array<{}>
};

const LoadingCompWrapper = (WrappedComponent: ComponentType<any>) : ComponentType<any> =>{
  return class extends PureComponent <Props> {
    render() {
      const { isFetching } = this.props;
      if(isFetching) {
        return <Spinner color='green'/>
      }
      return <WrappedComponent {...this.props}/>
    }
  }
};

export default LoadingCompWrapper;
