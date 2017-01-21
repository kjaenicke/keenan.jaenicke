import axios from 'axios';
import { API_BASE } from './constants';

export const fetchAllPosts = () => (
  axios.get(`${API_BASE}/posts`).then(res => res.data)
);

export const fetchTechPosts = () => (
  axios.get(`${API_BASE}/posts?type=Tech`).then(res => res.data)
);

export const fetchRunningPosts = () => (
  axios.get(`${API_BASE}/posts?type=Running`).then(res => res.data)
);

export const fetchRandomPosts = () => (
  axios.get(`${API_BASE}/posts?type=Random`).then(res => res.data)
);
