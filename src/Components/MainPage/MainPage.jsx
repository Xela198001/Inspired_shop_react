import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../features/goodsSlice.js';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../features/navigationSlice.js';
import { Goods } from '../Goods/Goods.jsx';
import { Banner } from '../Banner/Banner.jsx';

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { activeGender, categories } = useSelector((state) => state.navigation);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
    }
  }, [gender, category, dispatch]);
  console.log(categories);
  return (
    <>
      {categories ? (
        <Banner data={categories ? categories[activeGender] : null} />
      ) : null}
      <Goods category={category} />
    </>
  );
};
