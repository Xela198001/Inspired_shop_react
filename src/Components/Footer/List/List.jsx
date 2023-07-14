import { Item } from '../Item/Item.jsx';
import s from '../Footer.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const List = () => {
  const { genderList, categories } = useSelector((state) => state.navigation);

  return genderList.map((val, index) => (
    <li key={index} className={s.categoryItem}>
      <h3 className={cn(s.categorySubtitle)}>
        <NavLink className={s.link} to={`/catalog/${val}`}>
          {categories[val].title}
        </NavLink>
      </h3>

      <ul className={cn(s.categorySublist)}>
        {categories[val].list.map((item, idx1) => (
          <Item
            key={idx1}
            categoryLink={val}
            link={item.slug}
            title={item.title}
          />
        ))}
      </ul>
    </li>
  ));
};
