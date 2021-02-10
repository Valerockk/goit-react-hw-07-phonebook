import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import contactsOperations from "../redux/contacts/contactsOperations";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm />
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
