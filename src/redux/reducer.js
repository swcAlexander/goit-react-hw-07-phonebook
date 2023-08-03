import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({ id: action.payload.id, ...action.payload });
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactSlice.actions;
export default contactSlice.reducer;
