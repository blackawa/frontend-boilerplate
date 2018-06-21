import React from 'react';
import {connect} from 'react-redux';
import ExampleTemplate from '../../templates/example';

const ExamplePage = (props) => <ExampleTemplate {...props}/>;

const connector = connect(
  state => state,
  dispatch => {
    return {};
  }
);

export default connector(ExamplePage);