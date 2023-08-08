import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from 'components/ContactForm/ContactForm.module.css';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contactsItems = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
  e.preventDefault();
  if (name.trim() === '' || number.trim() === '') {
    toast.error('Please fill in all fields');
    return;
  }
  const contact = { name, number };
  const existingContact = contactsItems.find(
    item => item.name.toLowerCase() === contact.name.toLowerCase()
  );

  if (existingContact) {
    toast.error('The contact is already in the contact book!');
    return;
  }

  
  dispatch(addContact(contact));
  reset();
};

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <h1 className={style.contactFormHeader}>Phonebook</h1>
      <input
        className={style.contactInput}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className={style.contactInput}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Phone number"
      />
      <button className={style.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
