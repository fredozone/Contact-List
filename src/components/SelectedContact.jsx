import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);
  console.log(selectedContactId);
  useEffect(() => {
    async function fecthSelectedContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.log(error);
      }
    }
    fecthSelectedContact();
  }, [selectedContactId]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan="3">Contact Info</td>
          </tr>
        </thead>
        <tbody>
          {contact && (
            <>
              <tr>
                <td>Name: {contact.name}</td>
              </tr>
              <tr>
                <td>Phone: {contact.phone}</td>
              </tr>
              <tr>
                <td>Email: {contact.email}</td>
              </tr>
              <tr>
                <td>
                  Address: {contact.address.suite}
                  {contact.address.street}, {contact.address.city},
                  {contact.address.zipcode}
                </td>
              </tr>
              <tr>
                <td>Username: {contact.username}</td>
              </tr>
              <tr>
                <td>Website: {contact.website}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Go back to Contact List
      </button>
    </>
  );
};

export default SelectedContact;
