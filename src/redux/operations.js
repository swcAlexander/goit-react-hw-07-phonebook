import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6464cb9d043c103502c322d3.mockapi.io/api/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(`/contacts`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('ERR_BAD_REQUEST');
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      throw new Error('ERR_BAD_REQUEST');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      throw new Error('ERR_BAD_REQUEST');
    }
  }
);
