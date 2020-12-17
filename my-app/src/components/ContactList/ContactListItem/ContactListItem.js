import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={styles.contactLi}>
      <p className={styles.contactLiP}>
        {name}: {number}
      </p>
      <button type="button" onClick={onDelete} className={styles.contactLiBtn}>
        delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
