import {
  editContact,
  delContact,
  addContact,
} from "../../store/actions/contactActions";
import { clearInfo } from "../../store/actions/currentContactActions";
import api from "../../api/contact-service";
import { useDispatch, useSelector } from "react-redux";

import "./ContactBtns.css";

const ContactBtns = () => {
  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.currentContactList.currentContact,
  );

  const onNewClick = () => {
    dispatch(clearInfo());
  };

  const onDeleteClick = () => {
    api
      .delete(`/contacts/${currentContact.id}`)
      .then(({ statusText }) => console.log(statusText));
    dispatch(delContact(currentContact.id));
  };

  const onSaveClick = () => {
    if (!currentContact.id) {
      api
        .post("/contacts", currentContact)
        .then(({ data }) => dispatch(addContact(data)));
    } else {
      api
        .put(`/contacts/${currentContact.id}`, currentContact)
        .then(({ data }) => dispatch(editContact(data)));
    }
  };

  return (
    <div className="btns">
      <button className="btn1" form="Form" type="reset" onClick={onNewClick}>
        New
      </button>

      <button className="btn1" form="Form" type="submit" onClick={onSaveClick}>
        Save
      </button>

      {currentContact.id && (
        <button className="btn1" form="Form" onClick={onDeleteClick}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ContactBtns;
