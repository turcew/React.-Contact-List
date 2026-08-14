import "./ContactForm.css";

import {
  editContact,
  delContact,
  addContact,
  clearCurrentContact,
} from "../../store/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const emptyContact = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.contactList.currentContact,
  );

  const [formData, setFormData] = useState({
    emptyContact,
  });

  useEffect(() => {
    setFormData({
      ...currentContact,
    });
  }, [currentContact]);

  const deleteInput = (event) => {
    const input = event.target.closest("div").querySelector("input");
    if (input) {
      setFormData((prev) => ({ ...prev, [input.name]: "" }));
    }
  };

  const onSaveClick = (event) => {
    event.preventDefault();

    if (!formData.id) {
      dispatch(addContact(formData));
      dispatch(clearCurrentContact());
    } else {
      dispatch(editContact(formData));
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onNewClick = () => {
    dispatch(clearCurrentContact());
    resetForm();
  };
  const resetForm = () => {
    setFormData(emptyContact);
  };

  const onDeleteClick = (e) => {
    e.preventDefault();
    if (!formData.id) return;

    dispatch(delContact(formData.id));
    dispatch(clearCurrentContact());
  };

  return (
    <form className="container" id="Form">
      <div className="area">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="firstName"
          onChange={onInputChange}
        />
        <button type="button" className="btn" onClick={deleteInput}>
          X
        </button>
      </div>

      <div className="area">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="lastName"
          onChange={onInputChange}
        />
        <button type="button" className="btn" onClick={deleteInput}>
          X
        </button>
      </div>

      <div className="area">
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={onInputChange}
        />
        <button type="button" className="btn" onClick={deleteInput}>
          X
        </button>
      </div>

      <div className="area">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="phone"
          onChange={onInputChange}
        />
        <button type="button" className="btn" onClick={deleteInput}>
          X
        </button>
      </div>
      <div className="btns">
        <button className="btn1" form="Form" type="reset" onClick={onNewClick}>
          New
        </button>

        <button
          className="btn1"
          form="Form"
          type="submit"
          onClick={onSaveClick}
        >
          Save
        </button>

        {currentContact.id && (
          <button className="btn1" form="Form" onClick={onDeleteClick}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
