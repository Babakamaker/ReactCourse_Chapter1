/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AddContactForm = ({ onAdd }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let errorMessage = '';
        if (!firstName) {
            errorMessage = 'The first name is required.';
        } else if (!lastName) {
            errorMessage = 'The last name is required.';
        } else if (!phone) {
            errorMessage = 'The phone is required.';
        }

        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        const newContact = { id: Date.now(), firstName, lastName, phone };
        onAdd(newContact);
        setFirstName('');
        setLastName('');
        setPhone('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Add</button>
        </form>
    );
};

export default AddContactForm;
