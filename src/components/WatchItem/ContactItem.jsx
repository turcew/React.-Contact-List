import "./ContactItem.css";

import { useDispatch, useSelector } from "react-redux";
import {
  delContact,
  clearCurrentContact,
  changeCurrentContact,
} from "../../store/slices/contactSlice";

function editBackground(contactId, editId) {
  return {
    backgroundColor: contactId === editId ? "darkblue" : "",
  };
}

const ContactItem = ({ contact }) => {
  const { id, firstName, lastName } = contact;

  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.contactList.currentContact,
  );

  const onContactDelete = () => {
    dispatch(delContact(id));
    dispatch(clearCurrentContact());
  };

  const onContactEdit = () => {
    dispatch(changeCurrentContact(id));
  };

  return (
    <div
      className="container"
      style={editBackground(contact.id, currentContact.id)}
      onDoubleClick={onContactEdit}
    >
      <div className="item">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <button onClick={onContactDelete}>X</button>
      </div>
    </div>
  );
};

export default ContactItem;
