import { useParams } from 'react-router-dom';
import { Container } from '../Layout/Container/Container.jsx';
import { Category } from '../Header/Navigation/Category/Category.jsx';

export const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams();

  return (
    <Container>
      <div>MainPage {gender}</div>
      {Category && <p>Категория: {category}</p>}
    </Container>
  );
};
