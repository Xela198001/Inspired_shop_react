import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container.jsx';
import s from './Banner.module.scss';
import { API_URL } from '../../const.js';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

export const Banner = ({ data }) => {
  const banner = data?.banner;
  const [bgURL, setBgURL] = useState('');
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  useEffect(() => {
    if (isMobile) {
      setBgURL(`${API_URL}/${banner?.bg?.mobile}`);
    } else if (isTablet) {
      setBgURL(`${API_URL}/${banner?.bg?.tablet}`);
    } else if (isLaptop) {
      setBgURL(`${API_URL}/${banner?.bg?.laptop}`);
    } else {
      setBgURL(`${API_URL}/${banner?.bg?.desktop}`);
    }
  }, [isMobile, isTablet, isLaptop, banner]);

  return (
    banner && (
      <section
        className={s.banner}
        style={{ backgroundImage: `url(${bgURL})` }}
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
