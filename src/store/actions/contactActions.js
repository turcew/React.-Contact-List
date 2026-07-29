export const addContact = (contact) => {
  return {
    type: "addContact",
    payload: contact,
  };
};

export const delContact = (id) => {
  return {
    type: "delContact",
    payload: id,
  };
};

export const editContact = (contact) => {
  return {
    type: "editContact",
    payload: contact,
  };
};

export const getContacts = (contacts) => {
  return {
    type: "getContacts",
    payload: contacts,
  };
};
