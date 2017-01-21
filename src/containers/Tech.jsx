import React from 'react';
import { fetchTechPosts } from '../actions';
import PostsCategory from '../components/PostsCategory';
import PostFactory from '../factories/PostFactory';

const TechContainer = props => (
  <PostsCategory
    name="Tech"
    posts={ props.posts }
  />
);

export default PostFactory(TechContainer, fetchTechPosts);
