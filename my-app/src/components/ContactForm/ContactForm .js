import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

import uuid from 'react-uuid';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    addContact(contact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitHandler} className={styles.contactForm}>
      <label htmlFor="nameInput">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          placeholder="enter name..."
          onChange={changeHandler}
          id="nameInput"
        />
      </label>

      <label htmlFor="numberInput">
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="enter number..."
          onChange={changeHandler}
          id="numberInput"
        />
      </label>
      <button type="submit" disabled={!name.length || !number.length}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
