import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addToAppState = (stateForm) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, stateForm] };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handlerInput={this.handlerInput}
          addToAppState={this.addToAppState}
        />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default App;
