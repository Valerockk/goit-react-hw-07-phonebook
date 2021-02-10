import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.contacts.filter;
const getContacts = (state) => state.contacts.items;

const getVisibleTasks = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getFilter,
  getVisibleTasks,
};
