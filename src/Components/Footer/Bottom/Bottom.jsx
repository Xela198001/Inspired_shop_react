import s from './Bottom.module.scss';
import cn from 'classnames';

export const Bottom = () => {
  return (
    <>
      <div className={cn(s.copyright)}>© INSPIRED, 2023</div>
      <div className={cn(s.development)}>
        <div className={cn(s.developmentList)}>
          <span>Designer: Anastasia Ilina</span>
          <span>Developer: </span>
        </div>
      </div>
    </>
  );
};
