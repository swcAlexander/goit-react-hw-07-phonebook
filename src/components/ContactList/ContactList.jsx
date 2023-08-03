import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/reducer';
import { filteredContacts } from 'redux/selectors'; 
import { ContactItem } from 'components/ContactList/ContactsItem/ContactItem';
import style from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <div className={style.contactListContainer} key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
          />
          <button type="button" onClick={() => handleContactDelete(contact.id)}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};