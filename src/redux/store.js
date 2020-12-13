import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import contactsReducer from "./contacts/contactsReducer"
import logger from 'redux-logger'

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [...defaultMiddleware, logger]
})

export default store
