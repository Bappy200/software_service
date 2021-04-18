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
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
