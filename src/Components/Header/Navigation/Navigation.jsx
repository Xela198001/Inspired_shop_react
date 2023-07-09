import { Container } from '../../Layout/Container/Container.jsx';
import { Gender } from './Gender/Gender.jsx';

export const Navigation = ({ list }) => {
  return (
    <nav>
      <Container>
        <Gender list={list} />
      </Container>
    </nav>
  );
};
