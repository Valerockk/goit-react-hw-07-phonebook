import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactsRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactsActions.addContactsSuccess(data));
    })
    .catch((error) => {
      dispatch(contactsActions.addContactsError(error));
    });
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};