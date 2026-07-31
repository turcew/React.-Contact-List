import "./ContactItem.css";

import { useDispatch } from "react-redux";
import { delContact } from "../../store/actions/contactActions";
import api from "../../api/contact-service";
import { changeInfo } from "../../store/actions/currentContactActions";

// function editBackground(contactId, editId) {
//   return {
//     backgroundColor: contactId === editId ? "darkblue" : "",
//   };
// }

const ContactItem = ({ contact }) => {
  const { id, firstName, lastName } = contact;

  const dispatch = useDispatch();

  const onContactDelete = () => {
    api
      .delete(`/contacts/${id}`)
      .then(({ statusText }) => console.log(statusText))
      .catch((error) => console.log(error));
    dispatch(delContact(id));
  };

  const onContactEdit = () => {
    // api
    //   .put(`/contacts/${contact.id}`, contact)
    //   .then(({ data }) => dispatch(editContact(data)));
    dispatch(changeInfo(contact));
  };

  return (
    <div
      className="container"
      // style={editBackground(contact.id, editId)}
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
