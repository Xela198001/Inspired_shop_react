import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../Layout/Container/Container.jsx';
import s from './Top.module.scss';
import { Product } from '../Product.jsx';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../../features/goodsSlice.js';

export const Top = ({ gender, category, count }) => {
  const dispatch = useDispatch();
  const goodsList = useSelector((state) => {
    return state.goods;
  });
  const top = true;

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category, count, top }));
      return;
    }
  }, [gender, category, count, top, dispatch]);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>Вам также может понравиться</h2>
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
