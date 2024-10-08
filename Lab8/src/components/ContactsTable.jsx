/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ContactsTable = ({ contacts, onRemove, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editContact, setEditContact] = useState({ firstName: '', lastName: '', phone: '' });

  const handleEdit = (contact) => {
    setEditId(contact.id);
    setEditContact({ firstName: contact.firstName, lastName: contact.lastName, phone: contact.phone });
  };

  const handleSave = () => {
    if (!editContact.firstName.trim() || !editContact.lastName.trim() || !editContact.phone.trim()) {
      alert('All fields are required');
      return;
    }
    onEdit(editId, { id: editId, ...editContact });
    setEditId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="5">No data to display</td>
          </tr>
        ) : (
          contacts.map((contact) => (
            <tr key={contact.id.toString()}>
              <td>{contact.id.toString()}</td>
              <td>
                {editId === contact.id ? (
                  <input
                    type="text"
                    value={editContact.firstName}
                    onChange={(e) => setEditContact({ ...editContact, firstName: e.target.value })}
                    style={{ borderColor: !editContact.firstName.trim() ? 'red' : 'inherit' }}
                  />
                ) : (
                  contact.firstName
                )}
              </td>
              <td>
                {editId === contact.id ? (
                  <input
                    type="text"
                    value={editContact.lastName}
                    onChange={(e) => setEditContact({ ...editContact, lastName: e.target.value })}
                    style={{ borderColor: !editContact.lastName.trim() ? 'red' : 'inherit' }}
                  />
                ) : (
                  contact.lastName
                )}
              </td>
              <td>
                {editId === contact.id ? (
                  <input
                    type="text"
                    value={editContact.phone}
                    onChange={(e) => setEditContact({ ...editContact, phone: e.target.value })}
                    style={{ borderColor: !editContact.phone.trim() ? 'red' : 'inherit' }}
                  />
                ) : (
                  contact.phone
                )}
              </td>
              <td>
                <button onClick={() => onRemove(contact.id)}>Remove</button>
                {editId === contact.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(contact)}>Edit</button>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ContactsTable;
