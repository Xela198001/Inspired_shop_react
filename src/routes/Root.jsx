import { Header } from '../Components/Header/Header.jsx';
import { Footer } from '../Components/Footer/Footer.jsx';
import { Main } from '../Components/Layout/Main/Main.jsx';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
