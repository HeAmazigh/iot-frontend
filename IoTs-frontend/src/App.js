import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {AuthContext} from './shared/context/auth-context';
import {useAuth} from './shared/hooks/auth-hook';
import store from './redux/store'
import {Provider} from "react-redux"
import './App.css';

import {ToastContainer} from 'react-toastify'

import Login from './pages/authpages/Login';
import Signup from './pages/authpages/Signup';
import Landing from './pages/Landing/Landing';
import Admin from './pages/admin'

const App = () => {
  const {userId, token, login, logout} = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path='/admin' exact> <Admin/> </Route>
        <Redirect to="/admin"/>
      </Switch>
    )
  }else{
    routes = (
      <Switch>
        <Route path='/' exact> <Login/> </Route>
        <Route path='/signup' exact> <Signup/> </Route>
        <Redirect to='/'/>
      </Switch>
    )
  }
  return (
    <Provider store={store}>
    <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, userId: userId, login: login,logout: logout}}>
      <Router>
        <main>
          <Suspense fallback={
            <div className="center">
              <h1>Loading</h1>
            </div>
          }>
            {routes}
            <ToastContainer/>
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
    </Provider>
  );
}

export default App;
