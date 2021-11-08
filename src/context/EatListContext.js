import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const eatListReducer = (state, action) => {

  switch (action.type) {
    case 'get_list':
      return action.payload;
    case 'edit_item':
      return state.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    case 'delete_item':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const getEatList = dispatch => {
  return async () => {
    const response = await jsonServer.get('eatList');

    dispatch({ type: 'get_list', payload: response.data.businesses });
  };
};

const addToEatList = dispatch => {
  return async (title, callback) => {
    await jsonServer.post('/eatList', { title });

    if (callback) {
      callback();
    }
  };
};

const deleteItem = dispatch => {
  return async id => {
    await jsonServer.delete(`/eatList/${id}`);

    dispatch({ type: 'delete_item', payload: id });
  };
};

const editItem = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/eatList/${id}`, { title, content });

    dispatch({
      type: 'edit_item',
      payload: { id, title, content }
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  eatListReducer,
  { addToEatList, deleteItem, editItem, getEatList },
  []
);
