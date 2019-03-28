import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then(res =>
    dispatch({
      // this is then being sent to the reducer
      type: GET_ITEMS,
      payload: res.data
    })
  );
};
export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  // Axios takes care of change to server
  axios.delete(`/api/items/${id}`).then(res =>
    // dispatch takes care of change to redux
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
