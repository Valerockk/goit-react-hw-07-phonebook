import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const changeFilter = (state, action) => {
  return state.filter((task) => task.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContactsSuccess]: addContact,
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.removeContactSuccess]: removeContact,
  [contactsActions.changeFilter]: changeFilter,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
