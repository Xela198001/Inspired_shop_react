import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../Components/Layout/Container/Container.jsx';
import s from './ProductPage.module.scss';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../features/productSlice.js';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const.js';
import cn from 'classnames';
import { ColorList } from '../../Components/Colors/ColorList.jsx';
import { Count } from '../../Components/Count/Count.jsx';
import { ProductSize } from '../../Components/Product/ProductSize/ProductSize.jsx';
import { BtnFavorite } from '../../Components/BtnFavorite/BtnFavorite.jsx';
import { Goods } from '../../Components/Goods/Goods.jsx';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const [selectedColor, setSelectedColor] = useState('');
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const { activeGender, genderList, categories } = useSelector(
    (state) => state.navigation
  );

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <>
      <section className={s.card}>
        <Container className={s.container}>
          <img
            src={`${API_URL}/${product.pic}`}
            className={s.image}
            alt={`${product.title} ${product.description}`}
          />
          <form className={s.content}>
            <h2 className={s.title}>{product.title}</h2>
            <p className={s.price}> руб {product.price}</p>
            <div className={s.vendorCode}>
              <span className={s.subTitle}>Артикул</span>
              <span className={s.id}>{product.id}</span>
            </div>
            <div className={s.color}>
              <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
              <ColorList
                colors={product.colors}
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
              />
            </div>
            <ProductSize
              listSize={product.size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
            />
            <div className={s.description}>
              <p className={cn(s.sublitle, s.description)}>Описание</p>
              <p className={cn(s.decriptionText)}>{product.description}</p>
            </div>
            <div className={s.control}>
              <Count
                className={s.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <button className={s.addCart} type="submit">
                В корзину
              </button>
              <BtnFavorite id={id} />
            </div>
          </form>
        </Container>
      </section>
      <Goods
        title="Вам может понравиться"
        gender={product.gender}
        category={product.category}
        exclude={product.id}
        count="4"
      />
    </>
  );
};
