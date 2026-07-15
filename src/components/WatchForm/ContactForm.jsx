import { useState, useEffect } from "react";
import "./ContactForm.css";

const ContactForm = ({ editingContact, onSubmit, onEdit }) => {
  const [formData, setFormData] = useState({
    ...editingContact,
  });

  useEffect(() => {
    if (editingContact) {
      setFormData({
        id: editingContact.id,
        firstName: editingContact.firstName,
        lastName: editingContact.lastName,
        email: editingContact.email,
        phone: editingContact.phone,
      });
    } else {
      resetForm();
    }
  }, [editingContact]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (editingContact.id === "") {
      onSubmit({
        ...formData,
      });
      resetForm();
    } else {
      onEdit({
        ...formData,
      });
    }
  };

  const resetForm = () => {
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteInput = (event) => {
    const input = event.target.closest("div").querySelector("input");
    if (input) {
      setFormData((prev) => ({ ...prev, [input.name]: "" }));
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      className="container"
      id="Form"
      onSubmit={onFormSubmit}
      onReset={(e) => {
        e.preventDefault();
        resetForm();
      }}
    >
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
    </form>
  );
};

export default ContactForm;
