import React, { Component } from "react";
import ContactItem from "../WatchItem/ContactItem";
import ContactForm from "../WatchForm/ContactForm";

export class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onRemove={this.props.onRemove}
              onEdit={this.props.onEdit}
            />
          );
        })}
      </div>
    );
  }
}

export default ContactList;
