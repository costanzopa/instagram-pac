import React from 'react';
import useUser from '../../hooks/use-user';
import User from '../User';
import Suggestions from '../Suggestions';

const Sidebar = (props) => {
  const user = useUser();

  return (
    <div className="p-4">
      <User username={user.username} fullName={user.fullName} />
      <Suggestions userId={user.userId} />
    </div>
  );
};
export default Sidebar;
