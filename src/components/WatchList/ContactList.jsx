import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactItem from "../WatchItem/ContactItem";

import { getContacts } from "../../store/slices/contactSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactList.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
