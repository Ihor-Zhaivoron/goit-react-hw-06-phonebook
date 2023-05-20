import { ContactsItems } from '../ContactsItems/ContactsItems';

import css from './Contacts.module.css';

export const Contacts = ({ children }) => {
  return (
    <div className="container">
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      <ul className={css.list}>
        <ContactsItems />
      </ul>
    </div>
  );
};
