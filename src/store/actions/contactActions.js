import ACTION_TYPES from "./actionTypes";

// Creating
export const addContactAction = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ACTION,
    payload: contact,
  };
};

export const addContactRequest = () => {
  return {
    type: ACTION_TYPES.POST_CONTACT_REQUEST,
  };
};

export const addContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const addContactError = (error) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ERROR,
    payload: error,
  };
};

// Deleting
export const delContactAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  };
};

export const delContactRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
  };
};

export const delContactSuccess = (payload) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload,
  };
};

export const delContactError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  };
};

// Updating
export const editContactAction = (contact) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ACTION,
    payload: contact,
  };
};

export const editContactRequest = () => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_REQUEST,
  };
};

export const editContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const editContactError = (error) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ERROR,
    payload: error,
  };
};

// Getting
export const getContactsAction = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ACTION,
  };
};

export const getContactsRequest = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_REQUEST,
  };
};

export const getContactsSuccess = (contacts) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
    payload: contacts,
  };
};

export const getContactsError = (error) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ERROR,
    payload: error,
  };
};
