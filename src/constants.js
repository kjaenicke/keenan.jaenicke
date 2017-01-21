export const __DEV__ = process.env.NODE_ENV === 'development' ? 'development' : 'production';
export const API_BASE = __DEV__ ? 'http://localhost:3001' : 'http://localhost:3001';
