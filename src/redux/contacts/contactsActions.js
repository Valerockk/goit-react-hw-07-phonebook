import { createAction } from "@reduxjs/toolkit";

const addContactsRequest = createAction("contacts/addRequest");
const addContactsSuccess = createAction("contacts/addSuccess");
const addContactsError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/removeError");

const changeFilter = createAction("contacts/changeFilter");

export default {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  changeFilter,
};
