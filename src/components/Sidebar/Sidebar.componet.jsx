import React from 'react';
import useUser from '../../hooks/use-user';
import User from '../User';
import Suggestions from '../Suggestions';

const Sidebar = (props) => {
  const { user: fullName, username, userId } = useUser();
  return (
    <div p-4>
      <User />
      <Suggestions />
    </div>
  );
};
export default Sidebar;
