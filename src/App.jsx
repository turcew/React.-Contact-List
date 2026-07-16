import { useState, useEffect } from "react";
import "./App.css";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";
import ContactBtns from "./components/ContactBtns/ContactBtns";
import { nanoid } from "nanoid";

const INITIAL_CONTACT = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(INITIAL_CONTACT);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const saveContacts = (updatedContacts) => {
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const removeContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    setCurrentContact(INITIAL_CONTACT);
    saveContacts(updatedContacts);
  };

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, { ...newContact, id: nanoid() }];
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
    setCurrentContact(INITIAL_CONTACT);
  };

  return (
    <div className="site">
      <h1>Contact list</h1>
      <div className="items">
        <ContactList
          contacts={contacts}
          onRemove={removeContact}
          onEdit={handleEditClick}
          editContactId={currentContact.id}
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
