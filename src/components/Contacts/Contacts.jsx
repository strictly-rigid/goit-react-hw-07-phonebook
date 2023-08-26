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
        <p>No contacts on your phonebook</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </div>
  );
}

export default Contacts;
