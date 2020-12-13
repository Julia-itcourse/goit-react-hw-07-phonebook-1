import { combineReducers } from "redux"
import { createReducer } from '@reduxjs/toolkit'
import contactsActions from './contactsActions'

const handleAdd = (state, action) =>{
    return [...state, action.payload]
}

const handleRemove = (state, action) =>{
    return state.filter((contact) => contact.id !== action.payload)
}

const items = createReducer([], {
    [contactsActions.fetchContactSuccess]: (state, action) => action.payload,
    [contactsActions.addContactSuccess]: handleAdd,
    [contactsActions.removeContactSuccess]: handleRemove,
})

const filter = createReducer('', {
    [contactsActions.onChangeFilter]: (state, action) => action.payload
})


export default combineReducers({
  items,
  filter,
})
