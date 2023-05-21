import css from './PhoneBook.module.css';
import { ContactForm } from '../ContactForm/ContactForm';

export const PhoneBook = () => {
  return (
    <div className="container">
      <h1 className={css.title}>Phone book</h1>
      <ContactForm />
    </div>
  );
};
