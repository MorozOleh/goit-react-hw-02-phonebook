import React from "react";
import Contact from "./Contact"
import s from './ContactList.module.css';

const ContactList = ({items, onDeleteContact}) => {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.id} className={s.item}>

          <Contact name={item.name} number={item.number} />
          
          <button
            type="button"
            className={s.button}
            onClick={() => onDeleteContact(item.id)}
          >
            delete
          </button>

        </li>))}
    </ul>

  )
}

export default ContactList;