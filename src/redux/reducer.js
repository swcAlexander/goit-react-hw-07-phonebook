import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteContact, fetchContacts } from './operations';


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
    fetchingInProgress(state) {
       state.isLoading = true;
     },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
     },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
    extraReducers: (builder) => {
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
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});

export const { addContact, removeContact, setFilter, fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
export default contactSlice.reducer;

