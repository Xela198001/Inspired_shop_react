import cn from 'classnames';
import { Container } from '../Layout/Container/Container.jsx';
import { Product } from '../Product/Product.jsx';
import s from './Goods.module.scss';
import { useSelector } from 'react-redux';

export const Goods = ({ category }) => {
  const goodsList = useSelector((state) => {
    return state.goods;
  });
  const { activeGender, categories } = useSelector((state) => state.navigation);
  const title =
    category && categories
      ? categories[activeGender]?.list?.find((item) => {
          item.title === category;
        })?.title
      : 'Новинки';

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>{title ? title : null}</h2>
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
