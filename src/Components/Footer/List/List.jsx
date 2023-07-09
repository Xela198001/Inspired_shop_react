import { Item } from '../Item/Item.jsx';
import s from '../Footer.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const List = ({ list }) => {
  return list.map((val, index) => (
    <li key={index} className={s.categoryItem}>
      <h3 className={cn(s.categorySubtitle)}>
        <NavLink className={s.link} to={val.link}>
          {val.title}
        </NavLink>
      </h3>
      <ul className={cn(s.categorySublist)}>
        {val.categories.map((item, idx1) => (
          <Item
            key={idx1}
            categoryLink={val.link}
            link={item.link}
            title={item.title}
          />
        ))}
      </ul>
    </li>
  ));
};
