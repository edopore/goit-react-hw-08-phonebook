import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import {
  createContact,
  deleteContact,
  fetchContacts,
} from 'components/async_redux/contactOperators';
import {
  getContacts,
  getErrorStatus,
  getIsLoading,
} from 'components/async_redux/selectors';
import { filterContact } from 'components/async_redux/contactSlice';
import ContactForm from 'components/contactForm/ContactForm';
import Filter from 'components/filter/Filter';
import Contacts from 'components/contacts/Contacts';

function Phonebook() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getErrorStatus);

  const contactList = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.contacts.filter);

  const searchContact = name => {
    const result = contactList.filter(word =>
      word.name.toLowerCase().includes(name.toLowerCase())
    );
    if (result.length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContacts = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const phoneNumber = event.target.number.value;

    searchContact(name)
      ? alert(`${name} already exists`)
      : dispatch(
          createContact({
            name: name,
            phoneNumber: phoneNumber,
          })
        );

    event.target.reset();
  };

  const onDeleteContact = event => {
    dispatch(deleteContact(event.target.id));
    dispatch(fetchContacts());
  };

  const handleFilter = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm handleAddContacts={onAddContacts} />
      <h2>Contacts</h2>
      <Filter filterContacts={handleFilter} filterValue={filterValue} />
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Looks like there's an error</h3>}
      <Contacts contactsList={contacts} handleDeleteContact={onDeleteContact} />
    </div>
  );
}

export default Phonebook;
