import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const.js';
import s from './Product.module.scss';
import { ReactComponent as Like } from '../../assets/img/icons/heart.svg';
import { ColorList } from '../Colors/ColorList.jsx';

export const Product = ({ id, title, pic, price, colors }) => {
  return (
    <article>
      <NavLink to={`/product/${id}`} className={s.link}>
        <img src={`${API_URL}/${pic}`} className={s.image} alt={title} />
        <h3 className={s.title}>{title ? title : null}</h3>
      </NavLink>
      <div className={s.row}>
        <p className={s.price}> руб {price}</p>
        <button className={s.favorite}>
          <Like />
        </button>
      </div>
      <ColorList colors={colors} />
    </article>
  );
};
