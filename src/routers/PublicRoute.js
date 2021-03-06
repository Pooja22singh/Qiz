import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

 const PublicRoute = ({
    isAuthenticated,
     component:Component,
    ...rest
}) => (

<Route {...rest} component ={ (props) => (
isAuthenticated? (
    <Redirect to="/dashboard"/>
):(
   <Component {...props} />
)
)}/>
);

export const mapStateToProps = (state) => ({
    //isAuthenticated: !!state.auth.uid
    isAuthenticated:false
});
export default connect(mapStateToProps)(PublicRoute);