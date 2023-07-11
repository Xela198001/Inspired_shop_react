import cn from 'classnames';
import s from './Category.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Category = ({ listCategory }) => {
  // const { activeGender, categories } = useSelector((state) => state.navigation);
  const { categories, activeGender } = useSelector((state) => state.navigation);

  return (
    <ul className={s.category}>
      {categories[activeGender]?.list?.map((item, key) => (
        <li key={key} className={s.item}>
          <NavLink
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
            to={`${activeGender}/${item.slug}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
