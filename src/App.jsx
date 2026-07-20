import { useState, useEffect } from "react";
import "./App.css";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";
import ContactBtns from "./components/ContactBtns/ContactBtns";
// import { nanoid } from "nanoid";
import api from "./api/contact-service";

const INITIAL_CONTACT = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const App = () => {
  const [arrContacts, setArrContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(INITIAL_CONTACT);

  useEffect(() => {
    api.get("/").then(({ data }) => {
      if (!data) {
        setArrContacts([]);
      } else {
        setArrContacts(data);
      }
    });
  }, []);

  const removeContact = (id) => {
    api.delete(`/${id}`);
    const newContacts = arrContacts.filter((contact) => contact.id !== id);
    setArrContacts(newContacts);
    setCurrentContact(INITIAL_CONTACT);
  };

  const addContact = (newContact) => {
    api.post("/", newContact).then(({ data }) => {
      const newContacts = [...arrContacts, data];
      setArrContacts(newContacts);
    });
  };

  const editContact = (editedContact) => {
    const updatedContact = arrContacts.find(
      (contact) => contact.id === editedContact.id,
    );
    api
      .put(`/${updatedContact.id}`, editedContact)
      .then(({ data }) => {
        setArrContacts(
          arrContacts.map((contact) => {
            return contact.id !== editedContact.id ? contact : data;
          }),
        );
      })
      .catch((error) => console.log(error));
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
          contacts={arrContacts}
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
