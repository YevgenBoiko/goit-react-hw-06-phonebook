import { Container, Section, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import GlobalStyle from './GlobalStyle';

export const App = () => {
  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </Section>
      <GlobalStyle />
    </Container>
  );
};
