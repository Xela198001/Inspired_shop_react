import { Item } from '../Item/Item.jsx';
import s from '../Footer.module.scss';
import cn from 'classnames';

const nav = [
  {
    title: 'Женщины',
    canegories: [
      { link: 'bras', title: 'Бюстгальтеры' },
      { link: 'underpants', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pijamas', title: 'Пижамы' },
    ],
  },
  {
    title: 'Мужчины',
    canegories: [
      { link: 'underpants', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pijamas', title: 'Пижамы' },
    ],
  },
];

export const List = (props) => {
  return nav.map((val, index) => (
    <li key={index}>
      <div className={cn(s.categoryTitle, s.categorySubtitle)}>{val.title}</div>
      <ul className={cn(s.categorySublist, s.categorySublist)}>
        {val.canegories.map((item, idx1) => (
          <Item key={idx1} link={item.link} title={item.title} />
        ))}
      </ul>
    </li>
  ));
};
