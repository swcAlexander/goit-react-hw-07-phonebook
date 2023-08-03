import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import style from 'components/Apx.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div className={style.container}>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        alert('Your phonebook is empty. Add first contact!')
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
