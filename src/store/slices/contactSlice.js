import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/contact-service";

import {
  contactsState,
  currentContactState,
} from "../../model/initialContacts";
import { CONTACT_SLICE_NAME } from "../../constants/constants";

const initialState = {
  contacts: contactsState,
  currentContact: currentContactState,
  isFetching: false,
  error: null,
};

export const getContacts = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/getContacts`,
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.get(`/${CONTACT_SLICE_NAME}`);
      if (response.status >= 400) {
        throw new Error(`Error status is ${response.status}`);
      }
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const delContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/delContact`,
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/${CONTACT_SLICE_NAME}/${id}`);
      if (response.status >= 400) {
        throw new Error(
          `Cannot delete contact. Error status is ${response.status}`,
        );
      }
      dispatch(removeContact(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/editContact`,
  async (newContact, { rejectWithValue, dispatch, getState }) => {
    const contact = getState().contactList.contacts.find(
      (contact) => contact.id === newContact.id,
    );
    try {
      const response = await api.patch(`/${CONTACT_SLICE_NAME}/${contact.id}`, {
        ...newContact,
      });
      if (response.status >= 400) {
        throw new Error(
          `Cannot edit contact. Error status is ${response.status}`,
        );
      }
      const { data } = response;
      dispatch(changeContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/addContact`,
  async (contact, { rejectWithValue }) => {
    try {
      const response = await api.post(`/${CONTACT_SLICE_NAME}`, contact);
      if (response.status >= 400) {
        throw new Error(
          `Cannot add contact. Error status is ${response.status}`,
        );
      }
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setError = (state, action) => {
  state.isFetching = false;
  state.error = action.payload;
};

const setFetching = (state) => {
  state.isFetching = true;
  state.error = null;
};

const contactSlice = createSlice({
  name: CONTACT_SLICE_NAME,
  initialState,
  reducers: {
    removeContact(state, { payload }) {
      state.contacts = [
        ...state.contacts.filter((contact) => contact.id !== payload),
      ];
    },

    changeContact(state, { payload }) {
      state.contacts = state.contacts.map((contact) => {
        return contact.id === payload.id ? payload : contact;
      });
    },

    clearCurrentContact(state) {
      state.currentContact = { ...currentContactState };
    },
    changeCurrentContact(state, { payload }) {
      const contactInfo = state.contacts.find(
        (contact) => contact.id === payload,
      );
      state.currentContact = { ...contactInfo };
    },
  },
  extraReducers: (builder) => {
    // Get contacts
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.contacts = payload;
      state.error = null;
    });
    builder.addCase(getContacts.pending, setFetching);
    builder.addCase(getContacts.rejected, setError);
    // Add contact
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.error = null;
      state.contacts.push(payload);
    });
    builder.addCase(addContact.pending, setFetching);
    builder.addCase(addContact.rejected, setError);
    // Edit contact
    builder.addCase(editContact.pending, setFetching);
    builder.addCase(editContact.rejected, setError);
    // Delete contact
    builder.addCase(delContact.pending, setFetching);
    builder.addCase(delContact.rejected, setError);
  },
});

const { actions, reducer } = contactSlice;

const { removeContact, changeContact } = actions;

export const { clearCurrentContact, changeCurrentContact } = actions;

export default reducer;
