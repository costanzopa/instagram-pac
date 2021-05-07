import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/user-auth-listener';
import './styles/app.css';

import ProtectedRoute from './components/ProtectedRoute';
const LoginPage = lazy(() => import('./pages/Login'));
const SignUpPage = lazy(() => import('./pages/SignUp'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const App = () => {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <DashboardPage />
            </ProtectedRoute>
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
