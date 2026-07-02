import React, { Component } from "react";

import "./ContactBtns.css";

export class ContactBtns extends Component {
  deleteClickHandler = () => {
    this.props.onRemove(this.props.editingContact.id);
  };

  render() {
    const { editingContact } = this.props;
    return (
      <div className="btns">
        <button
          className="btn1"
          form="Form"
          type="reset"
          onClick={this.props.onNewClick}
        >
          New
        </button>
        <button className="btn1" form="Form">
          Save
        </button>

        {editingContact && editingContact.id && (
          <button
            className="btn1"
            form="Form"
            type="reset"
            onClick={this.deleteClickHandler}
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default ContactBtns;
