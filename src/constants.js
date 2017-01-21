export const __DEV__ = process.env.NODE_ENV === 'development' ? 'development' : 'production';
export const API_BASE = __DEV__ ? 'http://localhost:3001' : 'https://powerful-ocean-39419.herokuapp.com';
