import { Item } from '../Item/Item.jsx';
import s from '../Footer.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const List = ({ list }) => {
  return list.map((val, index) => (
    <li key={index}>
      <div className={cn(s.categoryTitle, s.categorySubtitle)}>
        <NavLink className={s.link} to={val.link}>
          {val.title}
        </NavLink>
      </div>
      <ul className={cn(s.categorySublist, s.categorySublist)}>
        {val.canegories.map((item, idx1) => (
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
