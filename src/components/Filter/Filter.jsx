import React from 'react';
import { nanoid } from 'nanoid';
import { selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/reducer';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };
  const inputId = nanoid(10);
  return (
    <div>
      <label htmlFor="" id={inputId}>
        Find filter by name
      </label>
      <input
        type="text"
        value={value}
        id={inputId}
        onChange={handleFilterChange}
      />
    </div>
  );
};
