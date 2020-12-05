import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handlerInput={this.handlerInput} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default App;
