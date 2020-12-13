import axios from 'axios';
import contactsActions from './contactsActions';


const onAddContact = ({name, number}) => dispatch =>{
    dispatch(contactsActions.addContactRequest());
    axios
    .post('http://localhost:2000/contacts', {name, number})
    .then(receivedData => console.log(receivedData));

}