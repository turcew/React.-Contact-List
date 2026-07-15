import ContactItem from "../WatchItem/ContactItem";

const ContactList = ({ contacts, onRemove, onEdit }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
