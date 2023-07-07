import s from './Bottom.module.scss';
import cn from 'classnames';

export const Bottom = () => {
  return (
    <>
      <div className={cn(s.copyright)}>© INSPIRED, 2023</div>
      <div className={cn(s.development)}>
        <ul className={cn(s.developmentList)}>
          <li>Designer: Anastasia Ilina</li>
          <li>
            Developer:
            <a href="https://t.me/xela1980" target="_blank">
              Aleksandr Meshcheryakov
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
