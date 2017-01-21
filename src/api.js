import axios from 'axios';
import { API_BASE } from './constants';

export const fetchAllPosts = () => (
  axios.get(`${API_BASE}/posts`).then(res => res.data)
);

export const fetchTechPosts = () => (
  axios.get(`${API_BASE}/posts?type=tech`).then(res => res.data)
);

export const fetchTechRunning = () => (
  axios.get(`${API_BASE}/posts?type=running`).then(res => res.data)
);

export const fetchRandomPosts = () => (
  axios.get(`${API_BASE}/posts?type=random`).then(res => res.data)
);
