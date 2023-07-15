import s from './ProductSize.module.scss';

export const ProductSize = ({ listSize, selectedSize, handleSizeChange }) => {
  return (
    <div className={s.size}>
      <p className={s.title}>Размеры</p>
      <div className={s.list}>
        {listSize?.map((item, key) => (
          <label key={key} data-key={key} className={s.item}>
            <input
              className={s.input}
              type="radio"
              name="size"
              checked={selectedSize ? selectedSize === item : key}
              onChange={handleSizeChange}
              value={item}
            />
            <span className={s.check}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
