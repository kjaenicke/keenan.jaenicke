import { handleActions } from 'redux-actions';
import { fetchTechPostsSuccess } from '../actions';

const initialState = {
  items: []
};

const tech = handleActions({
  [fetchTechPostsSuccess]: (state, action) => ({ ...state, items: action.payload })
}, initialState);

export default tech;
