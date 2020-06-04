import React from 'react';
import { Router, Switch} from 'react-router-dom';
import LoginPage from '../Components/LoginPage';
import DashBoard from '../Components/Dashboard';
import Instructions from '../Components/Instructions';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import SubmitPage from '../Components/SubmitPage';
//Router configuration
export const history = createHistory();
const AppRouter = ()=>(
    <Router history= {history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashBoard} />
            <PublicRoute path="/instructions" component={Instructions} />
            <PublicRoute path="/submit" component={SubmitPage} />
        </Switch>
    </div>
    </Router>
);
export default AppRouter;