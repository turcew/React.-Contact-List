import React, { Component } from "react";

import "./ContactItem.css";

export class ContactItem extends Component {
  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onRemove(this.props.contact.id);
  };

  handleDoubleClick = () => {
    this.props.onEdit(this.props.contact);
  };

  render() {
    const { firstName, lastName } = this.props.contact;
    return (
      <>
        <div className="container" onDoubleClick={this.handleDoubleClick}>
          <div className="item">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <button onClick={this.onContactDelete}>X</button>
          </div>
        </div>
      </>
    );
  }
}

export default ContactItem;
