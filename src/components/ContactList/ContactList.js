import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import styles from "./ContactList.module.css";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactList = ({ contacts }) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id} name={name} number={number} id={id} />
    ))}
  </ul>
);

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleTasks(state),
});

export default connect(mapStateToProps)(ContactList);
