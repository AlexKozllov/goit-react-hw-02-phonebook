import React, { Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// uuidv4();

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    contacts: [],
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  landleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.landleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handlerInput}
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handlerInput}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;

const Form = styled.form`
  input {
    display: block;
  }
`;
