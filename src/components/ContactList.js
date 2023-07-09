import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard >
        );
    });
    return (
        <div>
            <div >
                <strong class="font-bold">{renderContactList}</strong>
                <span class="absolute top-0 bottom-0 right-0 px-3 py-3">
                </span>
            </div>
        </div>
    )
}
export default ContactList;