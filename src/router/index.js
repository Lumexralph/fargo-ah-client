import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
import UserReset from '../views/Reset';
import PasswordReset from '../views/ResetPassword';
import ResetSuccess from '../views/ResetSuccess';
import CreateArticle from '../views/CreateArticle';
import Search from '../views/Search';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/category/:title" component={Login} />
      <Route path="/verify-email" component={VerifyEmailComponent} exact />
      <Route path="/verify-email/:token" component={VerifyEmailComponent} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset/edit" component={UserReset} />
      <Route path="/password/reset/edit" component={PasswordReset} />
      <Route path="/email" component={ResetSuccess} />
      <Route path="/create" component={CreateArticle} />
      <Route path="/search" component={Search} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
