import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact({ name, number, deleteContacts, id }) {
  return (
    <li className={css.contactListItem}>
      <div className={css.divPerson}>
        <div>
          <div className={css.boxUsername}>
            <FaUser size="16" />
            <p>{name}</p>
          </div>
          <div className={css.boxPhone}>
            <FaPhoneAlt size="16" />
            <p>{number}</p>
          </div>
        </div>

        <button className={css.deleteButton} type="button" onClick={() => deleteContacts(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Contact;


// const ContactListItem = ({ name, number, onDelete }) => (
//   <li className={css.contactListItem}>
//     {name}: {number}
//     <button className={css.deleteButton} type="button" onClick={onDelete}>
//       Delete
//     </button>
//   </li>
// );