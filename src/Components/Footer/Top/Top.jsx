import { Container } from '../../Layout/Container/Container.jsx';
import { Contacts } from '../Contacts/Contacts.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Social } from '../Social/Social.jsx';
import s from './Top.module.scss';
import cn from 'classnames';

export const Top = (props) => {
  return (
    <div className="bottom">
      <Container className={cn(s.container)}>
        <Navigation />
        <Social />
        <Contacts />
      </Container>
    </div>
  );
};
