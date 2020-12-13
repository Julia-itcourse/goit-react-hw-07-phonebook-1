import React from "react"
import ContactItem from "../ContactItem"
import PropTypes, { arrayOf } from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./ContactList.css"
import { connect } from "react-redux"
import contactsOperations from "../../redux/contacts/contactsOperations"
import contactsSelectors from "../../redux/contacts/contactsSelectors"


const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className="ContactList">
      {contacts.map((item) => (
        <CSSTransition
          key={item.id}
          timeout={250}
          classNames="ContactList-item-slide"
        >
          <ContactItem
            contact={item}
            onRemoveContact={() => onRemoveContact(item.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

// ContactList.propTypes = {
//   contacts: arrayOf(PropTypes.object)

// }

const mapStateToProps = (state) => ({
 contacts: contactsSelectors.getFilteredContacts(state),
})

const mapDispatchToProps = {
  onRemoveContact: contactsOperations.onRemoveContact,

}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
