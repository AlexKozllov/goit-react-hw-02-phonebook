import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContacts = (stateForm) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, stateForm] };
    });
  };

  hendleFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handlerInput={this.handlerInput}
          addContacts={this.addContacts}
        />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter filterValue={filter} hendleFilter={this.hendleFilter} />
        )}

        {visibleContacts.length > 0 && (
          <ContactList listContacts={visibleContacts} />
        )}
      </div>
    );
  }
}

export default App;
