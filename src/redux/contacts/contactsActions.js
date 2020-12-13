import { createAction } from "@reduxjs/toolkit"


const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

const onRemoveContact = createAction('contact/remove');
const onChangeFilter = createAction('contact/filter')

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,

  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  onRemoveContact,
  onChangeFilter,
}