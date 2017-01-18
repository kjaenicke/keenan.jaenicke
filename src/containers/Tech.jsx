import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import * as common from '../theme/common';
import { fetchTechPosts } from '../actions';

const classes = {
  header: common.pageLayout.pageHeader
};

class Tech extends React.Component {
  componentWillMount(){
    this.props.fetchTechPosts();
  }

  render(){
    <div className="tech">
      <h3 className={classes.header}>
        Tech
      </h3>
    </div>
  }
}

const mapStateToProps = state => ({ posts: state.tech.items });
const mapDispatchToProps = ({ fetchTechPosts });

export default connect(mapStateToProps, mapDispatchToProps)(Tech);
