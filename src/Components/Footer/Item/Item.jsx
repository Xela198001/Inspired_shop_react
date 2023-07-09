import { NavLink } from 'react-router-dom';
import s from '../Footer.module.scss';
import cn from 'classnames';

export const Item = ({ categoryLink, link, title }) => {
  return (
    <li>
      <NavLink to={`${categoryLink}/${link}`} className={cn(s.link)}>
        {title}
      </NavLink>
    </li>
  );
};
