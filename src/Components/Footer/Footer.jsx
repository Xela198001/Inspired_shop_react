import { Container } from '../Layout/Container/Container.jsx';
import { Bottom } from './Bottom/Bottom.jsx';
import { Top } from './Top/Top.jsx';
import s from './Footer.module.scss';
import cn from 'classnames';

export const Footer = ({ list }) => {
  return (
    <footer>
      <Container className={cn(s.container)}>
        <Top list={list} />
        <Bottom />
      </Container>
    </footer>
  );
};
