import "./ContactItem.css";

function editBackground(contactId, editId) {
  return {
    backgroundColor: contactId === editId ? "darkblue" : "",
  };
}

const ContactItem = ({ contact, editId, onRemove, onEdit }) => {
  const onContactDelete = (event) => {
    onRemove(contact.id);
  };

  const handleDoubleClick = () => {
    onEdit(contact);
  };

  return (
    <div
      className="container"
      style={editBackground(contact.id, editId)}
      onDoubleClick={handleDoubleClick}
    >
      <div className="item">
        <p>{contact.firstName}</p>
        <p>{contact.lastName}</p>
        <button onClick={onContactDelete}>X</button>
      </div>
    </div>
  );
};

export default ContactItem;
