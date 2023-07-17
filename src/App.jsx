import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainPage } from './Pages/MainPage/MainPage.jsx';
import { Root } from './routes/Root.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';
import { useDispatch } from 'react-redux';
import { fetchNavigation } from './features/navigationSlice.js';
import { useEffect } from 'react';
import { fetchColors } from './features/colorsSlice.js';
import { ProductPage } from './Pages/ProductPage/ProductPage.jsx';
import { FavoritePage } from './Pages/FavoritePage/FavoritePage.jsx';
import { CartPage } from './Pages/CartPage/CartPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  });
  return <RouterProvider router={router}></RouterProvider>;
};
