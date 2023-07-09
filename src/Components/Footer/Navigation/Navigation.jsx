import s from '../Footer.module.scss';
import cn from 'classnames';
import { List } from '../List/List.jsx';

export const Navigation = ({ list }) => {
  return (
    <nav className={cn(s.category)}>
      <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
      <ul className={cn(s.categoryList)}>
        <List list={list} />
      </ul>
    </nav>
  );
};
