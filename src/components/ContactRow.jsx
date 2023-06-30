import React from "react";

const ContactRow = ({ contact, setSelectedContactId }) => {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td className="name-person">{contact.name}</td>
      <td className="phone-number">{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
