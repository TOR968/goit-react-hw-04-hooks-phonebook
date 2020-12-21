import { useState } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm ';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter';

import useLocalStorage from '../components/hooks/useLocalStorage';

import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contacts, setContacts] = useLocalStorage('userContacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const changeHandler = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const deleteContactbyId = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...updatedContacts]);
  };

  const addContact = contact => {
    const newName = contact.name;
    const names = contacts.map(contact => contact.name.toLowerCase());
    if (names.includes(newName.toLowerCase().trim())) {
      toast.configure();
      toast.error(`${newName} is already in contact list`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
        delay: 200,
        transition: Zoom,
      });
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const filterContactsByName = () => {
    if (contacts.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 1 && <Filter onChange={changeHandler} />}
        <ContactList
          contacts={filterContactsByName()}
          onDelete={deleteContactbyId}
        />
      </Section>
    </>
  );
}

export default App;
