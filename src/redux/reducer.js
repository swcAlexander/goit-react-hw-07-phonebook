import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteContact, fetchContacts, addContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload.error;
    })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const { setFilter } = contactSlice.actions;
export default contactSlice.reducer;
