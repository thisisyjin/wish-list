import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';
const CLEAR = 'CLEAR';

const addWish = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteWish = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const clearAll = () => {
  return {
    type: CLEAR,
  };
};

JSON.parse(localStorage.getItem('wishes')) ||
  localStorage.setItem('wishes', JSON.stringify([]));

const reducer = (
  state = JSON.parse(localStorage.getItem('wishes')),
  action
) => {
  switch (action.type) {
    case ADD:
      const addItem = [...state, { text: action.text, id: Date.now() }];
      localStorage.setItem('wishes', JSON.stringify(addItem));
      return addItem;

    case DELETE:
      const deleteItem = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem('wishes', JSON.stringify(deleteItem));
      return deleteItem;

    case CLEAR:
      localStorage.setItem('wishes', JSON.stringify([]));
      return [];

    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addWish,
  deleteWish,
  clearAll,
};

export default store;
