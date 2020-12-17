import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts ? (
        contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))
      ) : (
        <p>no contact with such name in your phone </p>
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
