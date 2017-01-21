import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';
import Home from '../components/Home';
import PostsCategory from '../components/PostsCategory';
import PostFactory from '../factories/PostFactory';
import { fetchTechPosts } from '../actions';

const HomeContainer = props => (
  <div>
    <Home />
    <PostsCategory
      posts={ props.posts }
    />
  </div>
);

export default PostFactory(HomeContainer, fetchTechPosts);
