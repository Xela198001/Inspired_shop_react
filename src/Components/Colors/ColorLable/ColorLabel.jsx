import { useSelector } from 'react-redux';
import s from './ColorLabel.module.scss';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

export const ColorLabel = ({
  color,
  check,
  selectedColor,
  handleColorChange,
}) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color?.code);
  }, [color]);

  return (
    <label className={s.color} ref={colorRef}>
      <input
        type="radio"
        name="color"
        className={s.input}
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColorChange}
      />
      <span className={s.colorCheck}></span>
    </label>
  );
};
