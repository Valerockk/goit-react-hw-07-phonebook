import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
import contactsOperations from "../../redux/contacts/contactsOperations";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  handlechange = (e) => {
    const { name } = e.target;

    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactForm}>
        <label className={styles.ContactForm_label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlechange}
            className={styles.ContactForm_input}
          />
        </label>

        <label className={styles.ContactForm_label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handlechange}
            placeholder="Example +380440000000"
            className={styles.ContactForm_input}
          />
        </label>

        <button type="submit" className={styles.ContactForm_btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ContactForm);
