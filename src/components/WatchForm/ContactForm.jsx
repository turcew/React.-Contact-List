import "./ContactForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearInfo,
  changeInfo,
} from "../../store/actions/currentContactActions";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.currentContactList.currentContact,
  );

  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setFormData({
      firstName: currentContact.firstName,
      lastName: currentContact.lastName,
      email: currentContact.email,
      phone: currentContact.phone,
    });
  }, [currentContact]);

  const deleteInput = (event) => {
    const input = event.target.closest("div").querySelector("input");
    if (input) {
      setFormData((prev) => ({ ...prev, [input.name]: "" }));
    }
  };

  // const onInputChange = (event) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case "firstName":
  //       dispatch(changeFirstName(value));
  //       break;
  //     case "lastName":
  //       dispatch(changeLastName(value));
  //       break;
  //     case "email":
  //       dispatch(changeEmail(value));
  //       break;
  //     case "phone":
  //       dispatch(changePhone(value));
  //   }
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!currentContact.id) {
      dispatch(clearInfo());
      dispatch(changeInfo(formData));
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  return (
    <form
      className="container"
      id="Form"
      onSubmit={onFormSubmit}
      onReset={resetForm}
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
