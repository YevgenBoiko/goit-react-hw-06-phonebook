import { List, Item, TextName, Button } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contactList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filteredContacts);

  const filteredContacts = filter
    ? contactList.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contactList.contacts;

  const dispatch = useDispatch();

  return (
    <>
      {filteredContacts ? (
        <List>
          {filteredContacts.map(
            contact =>
              contact.id && (
                <Item key={contact.id}>
                  <TextName>{contact.name}: </TextName>
                  <p>{contact.number}</p>
                  <Button
                    type="button"
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </Button>
                </Item>
              )
          )}
        </List>
      ) : (
        ''
      )}
    </>
  );
};
