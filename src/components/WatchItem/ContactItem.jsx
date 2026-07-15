import "./ContactItem.css";

const ContactItem = ({ contact, onRemove, onEdit }) => {
  const onContactDelete = (event) => {
    onRemove(contact.id);
  };

  const handleDoubleClick = () => {
    onEdit(contact);
  };

  return (
    <div className="container" onDoubleClick={handleDoubleClick}>
      <div className="item">
        <p>{contact.firstName}</p>
        <p>{contact.lastName}</p>
        <button onClick={onContactDelete}>X</button>
      </div>
    </div>
  );
};

export default ContactItem;
