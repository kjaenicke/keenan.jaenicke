import axios from 'axios';

export const fetchTechPosts = () => (
  axios.get('http://localhost:3000/posts').then(res => res.data)
);
