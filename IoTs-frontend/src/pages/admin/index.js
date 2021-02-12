import React, { Component, Suspense } from 'react';
import { Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../../node_modules/font-awesome/scss/font-awesome.scss';
// import SihniIn1 from '../Demo/Authentication/SignIn/SignIn1';
//import AdminLayout  from './layout/AdminLayout';
import Loader from '../../layout/Loader'
import Aux from "../../hoc/_Aux";
import ScrollToTop from '../../layout/ScrollToTop';
import routes from "../../util/routes";


//import SignIn1 from '../Demo/Authentication/SignIn/SignIn1';
import { connect } from 'react-redux';
//import AdminLayout from './layout/AdminLayout';

//const admin = React.lazy(() => import('./layout/AdminLayout'));

// if I change this syntax I lose the breadcrumb 
const AdminLayout = Loadable({
    loader: () => import('../../layout/AdminLayout'),
    loading: Loader
});

class Admin extends Component {

    constructor() {
        super();
        this.state = {
            isUserAuthenticated: true
        };
    }

    render() {
        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                    <route.component {...props} />
                    )} 
                />
            ) : ( null );
        });
       // const isLoggedIn = this.props.isLoggedIn
      // const { isAutenticated } = this.props.auth

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader />}>
                        <div>                    
                            <Switch>                       
                            {menu}
                            {/* <Route  path='/admin' component={ AdminLayout} />   */}
                            <Route  path='/' component={ AdminLayout} />  
                            </Switch>
                        </div>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Admin) ;
