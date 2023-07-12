import { Container } from '../Layout/Container/Container.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice.js';
import { useParams } from 'react-router-dom';
import s from './MainPage.module.scss';
import { Product } from '../Product/Product.jsx';

export const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const goodsList = useSelector((state) => {
    return state.goods;
  });

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [gender, dispatch]);

  return (
    <Container>
      <h2 className={s.title}>Новинки</h2>
      <ul className={s.list}>
        {goodsList?.goodsList?.map((item, key) => (
          <li key={key}>
            <Product key={key} {...item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
