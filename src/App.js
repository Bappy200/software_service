import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import Book from './components/Dashboard/Book/Book';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import Reviwe from './components/Dashboard/Reviwe/Reviwe';
import Booking from './components/Dashboard/Booking/Booking';
import Orders from './components/Dashboard/Dashboard/Orders/Orders';
import ManageService from './components/Dashboard/ManageService/ManageService';

export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path='/addService'>
            <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path='/makeAdmin'>
            <AddAdmin></AddAdmin>
        </PrivateRoute>
        <PrivateRoute path='/reviwe'>
            <Reviwe></Reviwe>
        </PrivateRoute>
        <PrivateRoute path='/bookList'>
            <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path='/orders'>
            <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path='/manageServices'>
            <ManageService></ManageService>
        </PrivateRoute>
        <PrivateRoute path='/book/:id'>
            <Book></Book>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
