import s from '../Footer.module.scss';
import cn from 'classnames';

export const Item = ({ link, title }) => {
  return (
    <li className={cn(s.categoryItem)}>
      <h3 className={cn(s.categorySubtitle)}>
        <a href={link} className={cn(s.link)}>
          {title}
        </a>
      </h3>
    </li>
  );
};
