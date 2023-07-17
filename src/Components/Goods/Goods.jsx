import { useEffect } from 'react';
import { Container } from '../Layout/Container/Container.jsx';
import { Product } from '../Product/Product.jsx';
import s from './Goods.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../features/goodsSlice.js';

export const Goods = ({ gender, title, category, count, exclude }) => {
  const goodsList = useSelector((state) => {
    return state.goods;
  });
  const { activeGender, categories } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();
  const top = true;

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category, count, top, exclude }));
      return;
    }
  }, [gender, category, count, top, exclude, dispatch]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>{title ? title : 'Новинки'}</h2>
        <ul className={s.list}>
          {goodsList?.goodsList?.map((item, key) => (
            <li key={key}>
              <Product key={key} {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
