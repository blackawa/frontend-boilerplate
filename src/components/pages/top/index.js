import React from 'react';
import {connect} from 'react-redux';
import TopTemplate from '../../templates/top';

const TopPage = (props) => <TopTemplate {...props}/>;

const connector = connect(
  state => state,
  dispatch => {
    return {};
  }
);

export default connector(TopPage);