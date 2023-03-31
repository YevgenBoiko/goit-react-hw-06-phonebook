import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { contactsSlice } from './contactsSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,

            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'contacts',
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filter } = contactsSlice.actions;
