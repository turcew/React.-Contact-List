import { contactsState } from "../../model/initialContacts";

const initialState = {
  contacts: contactsState,
};

export default function contactsReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case "addContact":
      return { ...state, contacts: [...state.contacts, payload] };
    case "delContact":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case "editContact":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? { ...payload } : contact,
        ),
      };
    case "getContacts":
      return { ...state, contacts: payload };
    default:
      return state;
  }
}
