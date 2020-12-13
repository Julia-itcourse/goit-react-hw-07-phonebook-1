import { createAction } from "@reduxjs/toolkit"


const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const onRemoveContact = createAction('contact/remove');

const onChangeFilter = createAction('contact/filter')

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,

  onRemoveContact,
  onChangeFilter,
}