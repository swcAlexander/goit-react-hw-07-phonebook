import React from 'react';
import { useSelector } from 'react-redux';

import { filteredContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';
import style from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  console.log('Filtered Contacts:', contacts);

  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          itemId={contact.id}
          key={contact.id}
        />
      ))}
    </ul>
  );
};
