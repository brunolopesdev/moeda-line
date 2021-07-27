import { Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import Transactions from '../pages/Dashboard/Transactions';
import Update from '../pages/Dashboard/Update';



const Routes = () => {

    return (

        <Switch>

            <PublicRoute restricted={false} path="/" exact component={Home} />
            <PublicRoute restricted={true} path="/register" exact component={RegisterPage} />
            <PublicRoute restricted={true} path="/login" exact component={LoginPage} />


            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/update" component={Update} />

        </Switch>

    )
}

export default Routes
