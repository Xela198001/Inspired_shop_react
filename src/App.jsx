import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage.jsx';
import { Root } from './routes/Root.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';
import { useDispatch } from 'react-redux';
import { fetchNavigation } from './features/navigationSlice.js';
import { useEffect } from 'react';
import { fetchColors } from './features/colorsSlice.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="women" element={<MainPage gender="women" />} />
      <Route path="men" element={<MainPage gender="men" />} />
      <Route path="kids" element={<MainPage gender="men" />} />
      <Route path="women/:category" element={<MainPage gender="women" />} />
      <Route path="men/:category" element={<MainPage gender="man" />} />
      <Route path="kids/:category" element={<MainPage gender="man" />} />
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
