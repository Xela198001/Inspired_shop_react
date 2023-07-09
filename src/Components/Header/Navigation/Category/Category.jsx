import cn from 'classnames';
import s from './Category.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export const Category = ({ listCategory }) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';
  const categoriesList = listCategory.find((item) => item.link === gender);
  return (
    <ul className={s.category}>
      {categoriesList.categories.map((item, key) => (
        <li key={key} className={s.item}>
          <NavLink
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
            to={`${gender}/${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
