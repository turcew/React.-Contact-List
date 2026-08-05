import ACTION_TYPES from "./actionTypes";

export const addContact = (contact) => {
  return {
    type: ACTION_TYPES.ADD_CONTACT,
    payload: contact,
  };
};

export const delContact = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT,
    payload: id,
  };
};

export const editContact = (contact) => {
  return {
    type: ACTION_TYPES.EDIT_CONTACT,
    payload: contact,
  };
};

export const getContacts = (contacts) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS,
    payload: contacts,
  };
};
