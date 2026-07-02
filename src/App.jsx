import React, { Component } from "react";
import "./App.css";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";
import ContactBtns from "./components/ContactBtns/ContactBtns";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    currentContact: null,
    contacts: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "teast@gmail.com",
        phone: "+123456789",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "toast@gmail.com",
        phone: "+987654321",
      },
    ],
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (!contacts) {
      this.setState({
        contacts: [],
      });
    } else {
      this.setState({
        contacts: [...contacts],
      });
    }
  }

  removeContact = (id) => {
    this.setState((state) => {
      const contacts = [
        ...state.contacts.filter((contact) => contact.id !== id),
      ];
      this.saveContacts(contacts);
      return {
        contacts,
        currentContact: null,
      };
    });
  };

  addContact = (contact) => {
    contact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };

  newContact = () => {
    this.setState({ currentContact: null });
  };

  saveContacts = (arrContacts) => {
    localStorage.setItem("contacts", JSON.stringify(arrContacts));
  };

  editContact = (editedContact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) =>
        contact.id === editedContact.id ? editedContact : contact,
      );
      this.saveContacts(contacts);
      return { contacts: contacts };
    });
  };

  handleEditClick = (contact) => {
    this.setState({ currentContact: contact });
  };

  render() {
    return (
      <div className="site">
        <h1>Contact list</h1>
        <div className="items">
          <ContactList
            contacts={this.state.contacts}
            onRemove={this.removeContact}
            onEdit={this.handleEditClick}
          />
          <ContactForm
            onSubmit={this.addContact}
            onEdit={this.editContact}
            editingContact={this.state.currentContact}
          />
        </div>
        <ContactBtns
          onRemove={this.removeContact}
          editingContact={this.state.currentContact}
          onNewClick={this.newContact}
        />
      </div>
    );
  }
}

export default App;
