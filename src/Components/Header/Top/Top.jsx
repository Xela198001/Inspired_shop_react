import { Container } from '../../Layout/Container/Container.jsx';
import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/img/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CartSVG } from '../../../assets/img/icons/cart.svg';
import { ReactComponent as FavoriteSVG } from '../../../assets/img/icons/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/img/icons/search.svg';

export const Top = () => {
  return (
    <div className={s.top}>
      <Container className={s.container}>
        <a href="tel:89304902620" className={cn(s.link, s.phone)}>
          8 930 490 26 20
        </a>
        <NavLink to="/" className={s.logo}>
          <img src={logo} alt="logo: Inspired" />
        </NavLink>
        <div className={s.navigation}>
          <ul className={s.navList}>
            <li className={s.navIitem}>
              <button className={s.link}>
                <SearchSVG />
              </button>
            </li>
            <li className={s.navIitem}>
              <NavLink to="/cart" className={s.link}>
                <CartSVG />
              </NavLink>
            </li>
            <li className={s.navIitem}>
              <NavLink to="/favorite" className={cn(s.link, s.like)}>
                <FavoriteSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
