export const Category = () => {
  const list = [
    {
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

  return <div>Category</div>;
};
