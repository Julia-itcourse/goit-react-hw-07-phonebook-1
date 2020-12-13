import axios from 'axios';
import contactsActions from './contactsActions';


const onAddContact = ({name, number}) => dispatch =>{
    dispatch(contactsActions.addContactRequest());
    axios
    .post('http://localhost:2000/contacts', {name, number})
    .then(receivedData => {
        dispatch(contactsActions.addContactSuccess(receivedData.data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));

}

const onFetchContacts = () => dispatch => {
    dispatch(contactsActions.fetchContactRequest());
    axios
    .get('http://localhost:2000/contacts')
    .then(receivedData => dispatch(contactsActions.fetchContactSuccess(receivedData.data)))
    .catch(error => dispatch(contactsActions.fetchContactError(error)));
}


export default {
    onAddContact,
    onFetchContacts
}