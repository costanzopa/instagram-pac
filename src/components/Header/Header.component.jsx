import React, { useContext } from 'react';
import UserContext from '../../context/user';

const Header = (props) => {
  const { user } = useContext(UserContext);
  return <div>{`Header Email: ${user.email}`}</div>;
};
export default Header;
