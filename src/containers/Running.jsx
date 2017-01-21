import React, { Component } from 'react';
import { fetchTechPosts } from '../actions';
import PostsCategory from '../components/PostsCategory';
import PostFactory from '../factories/PostFactory';

const RunningContainer = props => (
  <PostsCategory
    name="Running"
    posts={ props.posts }
  />
);

export default PostFactory(RunningContainer, fetchTechPosts);
