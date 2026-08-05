import { contactsState } from "../../model/initialContacts";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  contacts: contactsState,
  isFetching: false,
  error: null,
};

export default function contactsReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    // Success
    case ACTION_TYPES.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        isFetching: false,
      };
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
        isFetching: false,
      };
    case ACTION_TYPES.PUT_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? { ...payload } : contact,
        ),
        isFetching: false,
      };
    case ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, isFetching: false };
    // Requesting
    case ACTION_TYPES.POST_CONTACT_REQUEST:
    case ACTION_TYPES.DELETE_CONTACT_REQUEST:
    case ACTION_TYPES.PUT_CONTACT_REQUEST:
    case ACTION_TYPES.GET_CONTACTS_REQUEST:
      return { ...state, isFetching: true };
    // Deleting
    case ACTION_TYPES.POST_CONTACT_ERROR:
    case ACTION_TYPES.DELETE_CONTACT_ERROR:
    case ACTION_TYPES.PUT_CONTACT_ERROR:
    case ACTION_TYPES.GET_CONTACTS_ERROR:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
}
