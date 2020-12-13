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

export default {
    onAddContact,
}