import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactItem from "../WatchItem/ContactItem";

import { getContacts } from "../../store/actions/contactActions";
import api from "../../api/contact-service";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactsList.contacts);

  useEffect(() => {
    api.get("/contacts").then(({ data }) => dispatch(getContacts(data)));
  }, [dispatch]);
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

// const mapStateToProps = ({ contacts }) => ({ contacts });

// const mapDispatchToProps = {
//   getContacts,
// };

export default ContactList;
