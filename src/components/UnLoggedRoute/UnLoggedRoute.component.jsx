import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const UnLoggedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return React.cloneElement(children);
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.DASHBOARD,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
export default UnLoggedRoute;

UnLoggedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
