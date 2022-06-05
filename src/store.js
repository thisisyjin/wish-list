import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addWish = createAction('ADD', (text) => ({ payload: { text } }));
const deleteWish = createAction('DELETE', (id) => ({ payload: { id } }));
const clearAll = createAction('CLEAR');

console.log(addWish());

JSON.parse(localStorage.getItem('wishes')) ||
  localStorage.setItem('wishes', JSON.stringify([]));

const reducer = createReducer(JSON.parse(localStorage.getItem('wishes')), {
  [addWish]: (state, action) => {
    const addItem = [...state, { text: action.payload.text, id: Date.now() }];
    localStorage.setItem('wishes', JSON.stringify(addItem));
    state.push({ text: action.payload.text, id: Date.now() });
  },
  [deleteWish]: (state, action) => {
    const deleteItem = state.filter((toDo) => toDo.id !== action.payload.id);
    localStorage.setItem('wishes', JSON.stringify(deleteItem));
    return deleteItem;
  },
  [clearAll]: (state, action) => {
    localStorage.setItem('wishes', JSON.stringify([]));
    return [];
  },
});

const store = configureStore({ reducer });

export const actionCreators = {
  addWish,
  deleteWish,
  clearAll,
};

export default store;
