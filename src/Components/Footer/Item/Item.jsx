import { NavLink } from 'react-router-dom';
import s from '../Footer.module.scss';
import cn from 'classnames';

export const Item = ({ categoryLink, link, title }) => {
  return (
    <li className={cn(s.categoryItem)}>
      <h3 className={cn(s.categorySubtitle)}>
        <NavLink to={`${categoryLink}/${link}`} className={cn(s.link)}>
          {title}
        </NavLink>
      </h3>
    </li>
  );
};
