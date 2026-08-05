import { currentContactState } from "../../model/initialContacts";
import ACTION_TYPES from "../actions/actionTypes";

const emptyContact = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const initialState = {
  currentContact: currentContactState,
};

export default function currentContactReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case ACTION_TYPES.CLEAR_INFO:
      return { ...state, currentContact: emptyContact };
    case ACTION_TYPES.CHANGE_INFO:
      return { ...state, currentContact: { ...payload } };
    default:
      return state;
  }
}
