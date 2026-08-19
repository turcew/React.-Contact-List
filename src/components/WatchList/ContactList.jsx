import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactItem from "../WatchItem/ContactItem";

import { getContacts } from "../../store/slices/contactSlice";

import { Box, Typography } from "@mui/material";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactList.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 2 }}>
      {contacts.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          No contacts yet
        </Typography>
      ) : (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </Box>
  );
};

export default ContactList;
