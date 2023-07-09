import { Contacts } from '../Contacts/Contacts.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Social } from '../Social/Social.jsx';

export const Top = ({ list }) => {
  return (
    <>
      <Navigation list={list} />
      <Social />
      <Contacts />
    </>
  );
};
