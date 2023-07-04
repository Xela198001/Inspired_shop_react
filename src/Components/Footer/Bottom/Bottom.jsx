import { Container } from '../../Layout/Container/Container.jsx';
import s from './Bottom.module.scss';
import cn from 'classnames';

export const Bottom = (props) => {
  return (
    <div className="bottom">
      <Container className={cn(s.container)}>
        <div className={cn(s.copyright)}>© INSPIRED, 2023</div>
        <div className={cn(s.development)}>
          <div className={cn(s.developmentList)}>
            <span>Designer: Anastasia Ilina</span>
            <span>Developer: </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
