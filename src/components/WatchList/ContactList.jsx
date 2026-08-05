import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactItem from "../WatchItem/ContactItem";

import { getContactsAction } from "../../store/actions/contactActions";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactsList.contacts);
  useEffect(() => {
    dispatch(getContactsAction());
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
