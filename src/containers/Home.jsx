import React from 'react';
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
