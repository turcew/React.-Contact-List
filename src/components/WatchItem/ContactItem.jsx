import "./ContactItem.css";

import { useDispatch, useSelector } from "react-redux";
import { delContactAction } from "../../store/actions/contactActions";
import {
  changeInfo,
  clearInfo,
} from "../../store/actions/currentContactActions";

function editBackground(contactId, editId) {
  return {
    backgroundColor: contactId === editId ? "darkblue" : "",
  };
}

const ContactItem = ({ contact }) => {
  const { id, firstName, lastName } = contact;

  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.currentContactList.currentContact,
  );

  const onContactDelete = () => {
    dispatch(delContactAction(id));
    dispatch(clearInfo());
  };

  const onContactEdit = () => {
    dispatch(changeInfo(contact));
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
