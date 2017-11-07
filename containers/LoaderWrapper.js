import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'native-base';

export default LoadingCompWrapper = (WrappedComponent) => {
  return class extends PureComponent {
    render() {
      const { isFetching } = this.props;
      if(isFetching) {
        return <Spinner color='green'/>
      }
      return <WrappedComponent {...this.props}/>
    }
  }
};
