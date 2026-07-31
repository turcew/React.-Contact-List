import { currentContactState } from "../../model/initialContacts";
import ACTION_TYPES from "../actions/actionTypes";
import { nanoid } from "nanoid";

const initialState = {
  currentContact: currentContactState,
};

export default function currentContactReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case ACTION_TYPES.CLEAR_INFO:
      return { ...state, currentContactState };
    case ACTION_TYPES.CHANGE_INFO:
      return { ...state, ...payload, id: nanoid() };
    default:
      return state;
  }
}
