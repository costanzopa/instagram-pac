import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/app.css';

const LoginPage = lazy(() => import('./pages/Login'));
const SignUpPage = lazy(() => import('./pages/SignUp'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
