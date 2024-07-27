import { NavLink } from 'react-router-dom';
import s from './GoBackBtn.module.css';

export const GoBackBtn = ({ path, children }) => {
  return (
    <NavLink className={s.link} to={path}>
      {children}
    </NavLink>
  );
};
