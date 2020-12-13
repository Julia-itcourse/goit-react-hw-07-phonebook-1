import React from "react"
import styles from "./ContactItem.module.css"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import contactsOperations from "../../redux/contacts/contactsOperations"

const ContactItem = ({ contact , onRemoveContact}) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.button} type="button" onClick={onRemoveContact}>
        Remove
      </button>
    </li>
  )
}



ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired
}

const mapStateToProps = state=>{
 return state
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {onRemoveContact: () => dispatch(contactsOperations.onRemoveContacts(ownProps.contact.id))}
);


export default connect(mapStateToProps, mapDispatchToProps)(ContactItem)
