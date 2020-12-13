import { createAction } from "@reduxjs/toolkit"


const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const onAddContact = createAction("contact/add", ({ name, number, id }) => ({
  payload: {
    newContact: {
      name,
      number,
      id,
    },
  },
}))

const onRemoveContact = createAction('contact/remove');

// const onRemoveContact = (contactId) => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     contactId,
//   },
// })

const onChangeFilter = createAction('contact/filter')

// const onChangeFilter = (filter) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// })

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,

  onAddContact,
  onRemoveContact,
  onChangeFilter,
}