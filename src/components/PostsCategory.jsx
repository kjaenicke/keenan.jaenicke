import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';

import * as common from '../theme/common';
import colors from '../theme/colors';
import Post from './Post';

const classes = {
  header: common.pageLayout.pageHeader,
  postsCategory: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey
  },
  posts: {
    display: 'flex',
    margin: '0 5% 5% 5%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

const PostsCategory = ({ sheet: {classes}, name, posts }) => (
  <div className={classes.postsCategory}>
    <h3 className={classes.header}>
      { name }
    </h3>
    <div className={classes.posts}>
      { posts.map(p => <Post key={p.id} {...p} />) }
    </div>
  </div>
);

PostsCategory.propTypes = {
  name: PropTypes.string,
  posts: PropTypes.array
};

export default injectSheet(classes)(PostsCategory);
