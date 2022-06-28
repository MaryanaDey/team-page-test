import Header from 'components/Header';
import Section from 'components/UI-kit/containers/Section';
import UsersList from 'components/UsersList';
import RegisterForm from 'components/RegisterForm';

const App = () => (
  <>
    <Header />
    <Section id="get" title="Working with GET request">
      <UsersList />
    </Section>

    <Section id="post" title="Working with POST request">
      <RegisterForm />
    </Section>
  </>
);

export default App;
