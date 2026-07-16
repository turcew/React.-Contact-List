import ContactItem from "../WatchItem/ContactItem";

const ContactList = ({ contacts, editContactId, onRemove, onEdit }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          editId={editContactId}
          contact={contact}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
