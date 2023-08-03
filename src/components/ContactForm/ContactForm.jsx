import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import style from 'components/ContactForm/ContactForm.module.css';
import { addContact } from 'redux/reducer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

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
    const contact = { id: nanoid(), name, number };
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
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
      />
      <input
        className={style.contactInput}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
      />
      <button className={style.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
