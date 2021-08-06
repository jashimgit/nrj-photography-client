import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ProvideAuth } from './components/auth/Auth';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import AddAdmin from './components/dashboard/AddAdmin';
import AddService from './components/dashboard/AddService';
import Checkout from './components/dashboard/Checkout';
import Dashboard from './components/dashboard/Dashboard';
import OrderList from './components/dashboard/OrdersList';
import ServiceList from './components/dashboard/ServiceList';
import Home from './components/pages/Home';
import ServiceDetails from './components/pages/ServiceDetails';




function App() {


  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/service-details">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order-list">
            <OrderList></OrderList>
          </PrivateRoute>
        <PrivateRoute path="/dashboard/add-admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/service">
            <ServiceList></ServiceList>
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>

  );
}

export default App;
