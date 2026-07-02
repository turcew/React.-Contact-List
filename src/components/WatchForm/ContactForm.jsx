import React, { Component } from "react";

import "./ContactForm.css";

export class ContactForm extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.props.editingContact === null) {
      this.props.onSubmit({
        firstName:
          this.state.firstName === ""
            ? (this.state.firstName = "firstName")
            : this.state.firstName,
        lastName:
          this.state.lastName === ""
            ? (this.state.lastName = "lastName")
            : this.state.lastName,
        email:
          this.state.email === ""
            ? (this.state.email = "test@gmail.com")
            : this.state.email,
        phone:
          this.state.phone === ""
            ? (this.state.phone = "phone")
            : this.state.phone,
      });
      this.resetForm();
    } else {
      this.props.onEdit({
        id: this.state.id,
        firstName:
          this.state.firstName === ""
            ? (this.state.firstName = "firstName")
            : this.state.firstName,
        lastName:
          this.state.lastName === ""
            ? (this.state.lastName = "lastName")
            : this.state.lastName,
        email:
          this.state.email === ""
            ? (this.state.email = "test@gmail.com")
            : this.state.email,
        phone:
          this.state.phone === ""
            ? (this.state.phone = "phone")
            : this.state.phone,
      });
    }
  };

  onFormReset = (event) => {
    event.preventDefault();
    this.resetForm();
  };

  componentDidUpdate(prevProps) {
    if (this.props.editingContact !== prevProps.editingContact) {
      if (this.props.editingContact !== null) {
        const { id, firstName, lastName, email, phone } =
          this.props.editingContact;
        this.setState({
          id,
          firstName,
          lastName,
          email,
          phone,
        });
      } else {
        this.resetForm();
      }
    }
  }

  resetForm = () => {
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  deleteInput = (event) => {
    const input = event.target.closest("div").querySelector("input");

    if (input) {
      input.value = "";
      this.setState({ [input.name]: "" });
    }
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        className="container"
        id="Form"
        onSubmit={this.onFormSubmit}
        onReset={this.onFormReset}
      >
        <div className="area">
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="firstName"
            onChange={this.onInputChange}
          />
          <button type="button" className="btn" onClick={this.deleteInput}>
            X
          </button>
        </div>
        <div className="area">
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.onInputChange}
          />
          <button type="button" className="btn" onClick={this.deleteInput}>
            X
          </button>
        </div>
        <div className="area">
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
          <button type="button" className="btn" onClick={this.deleteInput}>
            X
          </button>
        </div>
        <div className="area">
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.onInputChange}
          />
          <button type="button" className="btn" onClick={this.deleteInput}>
            X
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
