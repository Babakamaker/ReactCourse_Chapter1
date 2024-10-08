/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
import AddContactForm from './components/AddContactForm'
import ContactsTable from './components/ContactsTable'
import SearchContactInput from './components/SearchContactInput'

function App() {
  const [contacts, setContacts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  const handleRemoveContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContacts)
  }

  const handleEditContact = (id, updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? updatedContact : contact
    )
    setContacts(updatedContacts)
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue)
  )

  return (
    <div>
      <h1>Address Book</h1>
      <SearchContactInput
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      <AddContactForm onAdd={handleAddContact} />{' '}
      {/* Ensure this remains onAdd */}
      <ContactsTable
        contacts={filteredContacts}
        onRemove={handleRemoveContact}
        onEdit={handleEditContact}
      />
    </div>
  )
}

export default App
