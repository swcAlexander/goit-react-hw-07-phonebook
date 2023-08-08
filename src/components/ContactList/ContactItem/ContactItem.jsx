import React from 'react';
import { useDispatch } from 'react-redux';
import style from 'components/ContactList/ContactItem/ContactItem.module.css';
import Proptypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ name, number, itemId }) => {
  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={style.contactItem} key={itemId}>
      <span className={style.contactName}>{name}:</span>
      <span className={style.contactNumber}>{number}</span>
      <button type="button" onClick={() => handleContactDelete(itemId)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: Proptypes.string.isRequired,
  number: Proptypes.string.isRequired,
  itemId: Proptypes.string,
};
