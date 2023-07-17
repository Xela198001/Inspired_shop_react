import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as FavoriteSVG } from '../../assets/img/icons/heart.svg';
import s from './BtnFavorite.module.scss';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../features/favoriteSlice.js';
import cn from 'classnames';

export const BtnFavorite = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.includes(id));

  const handelToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  };

  return (
    <button
      className={isFavorite ? cn(s.like, s.active) : s.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handelToggleFavorite}
    >
      <FavoriteSVG />
    </button>
  );
};
