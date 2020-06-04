import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Components/Header';

 export default ({
    isAuthenticated,
     component:Component,
    ...rest
}) => (

<Route {...rest} component ={ (props) =>(
    <div>
    <Header {...props}/>
    <Component {...props}/>
    </div>
)}/>
);