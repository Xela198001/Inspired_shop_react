import { Header } from '../Components/Header/Header.jsx';
import { Footer } from '../Components/Footer/Footer.jsx';
import { Main } from '../Components/Layout/Main/Main.jsx';
import { Outlet } from 'react-router-dom';

const list = [
  {
    link: 'women',
    title: 'Женщины',
    canegories: [
      { link: 'bras', title: 'Бюстгальтеры' },
      { link: 'underpants', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pijamas', title: 'Пижамы' },
    ],
  },
  {
    link: 'men',
    title: 'Мужчины',
    canegories: [
      { link: 'underpants', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pijamas', title: 'Пижамы' },
    ],
  },
];

export const Root = () => {
  return (
    <>
      <Header list={list} />
      <Main>
        <Outlet />
      </Main>
      <Footer list={list} />
    </>
  );
};
