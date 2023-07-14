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
  const { activeGender, genderList, categories } = useSelector(
    (state) => state.navigation
  );

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
    }
  }, [gender, category, dispatch]);

  return (
    <>
      {!category && categories && (
        <Banner data={categories ? categories[activeGender] : null} />
      )}
      <Goods category={category} />
    </>
  );
};
