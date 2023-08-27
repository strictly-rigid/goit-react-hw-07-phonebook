import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactListItem from './ContactListItem/ContactListItem';
import css from './Contacts.module.css';

function Contacts() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      {isLoading ? (
        <p>...Loading</p>
      ) : filteredContacts.length === 0 && !error ? (
        <p>The phonebook is empty.</p>
      ) : (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} contact={{ id, name, phone }} />
        ))
      )}
    </div>
  );
}

export default Contacts;
