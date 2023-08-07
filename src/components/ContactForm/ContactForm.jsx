import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from 'components/ContactForm/ContactForm.module.css';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const contact = { name, number };
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

export default ContactForm;