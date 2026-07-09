import React, { useState, useEffect } from "react";
import "./App.css";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";
import ContactBtns from "./components/ContactBtns/ContactBtns";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const saveContacts = (updatedContacts) => {
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const removeContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    setCurrentContact(null);
    saveContacts(updatedContacts);
  };

  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    const updatedContacts = [...contacts, contactWithId];
    setContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  const editContact = (editedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact,
    );
    setContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  const handleEditClick = (contact) => {
    setCurrentContact(contact);
  };

  const newContact = () => {
    setCurrentContact(null);
  };

  return (
    <div className="site">
      <h1>Contact list</h1>
      <div className="items">
        <ContactList
          contacts={contacts}
          onRemove={removeContact}
          onEdit={handleEditClick}
        />
        <ContactForm
          onSubmit={addContact}
          onEdit={editContact}
          editingContact={currentContact}
        />
      </div>
      <ContactBtns
        onRemove={removeContact}
        editingContact={currentContact}
        onNewClick={newContact}
      />
    </div>
  );
};

export default App;
