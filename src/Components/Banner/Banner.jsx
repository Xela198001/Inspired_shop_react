import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container.jsx';
import s from './Banner.module.scss';
import { API_URL } from '../../const.js';

export const Banner = ({ data }) => {
  const banner = data?.banner;
  console.log(banner);
  return (
    banner && (
      <section
        className={s.banner}
        style={{ backgroundImage: `url(${API_URL}/${banner.bg.desktop})` }}
      >
        <Container>
          <div className={s.content}>
            <h2 className={s.title}>{banner?.description}</h2>
            <NavLink className={s.link} to={`/product/${banner.id}`}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};
