import "./ContactBtns.css";

const ContactBtns = ({ editingContact, onRemove, onNewClick }) => {
  const deleteClickHandler = () => {
    if (editingContact?.id) {
      onRemove(editingContact.id);
    }
  };

  return (
    <div className="btns">
      <button className="btn1" form="Form" type="reset" onClick={onNewClick}>
        New
      </button>

      <button className="btn1" form="Form">
        Save
      </button>

      {editingContact?.id && (
        <button className="btn1" form="Form" onClick={deleteClickHandler}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ContactBtns;
