import { handleActions } from 'redux-actions';

const initialState = {
  isFetching: false,
  errors: null,
  items: []
};

const makePostReducer = ({ requestAction, successAction, failureAction }) => handleActions({
  [requestAction]: (state, action) => ({ ...state, isFetching: true }),
  [successAction]: (state, action) => ({ ...state, isFetching: false, items: action.payload }),
  [failureAction]: (state, action) => ({ ...state, isFetching: false, errors: action.payload })
}, initialState);

export default makePostReducer;
