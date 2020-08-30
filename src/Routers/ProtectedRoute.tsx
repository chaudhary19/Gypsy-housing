import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Authentication from '../Authentication';
import Container from '../Container/Container';


interface Props{
    path:string;
    exact:boolean;
}

const ProtectedRoute:React.FunctionComponent<Props> = (props)=>{
    return (
        <Route {...props} render={(props)=>{
             if(Authentication.isLoggedIn())
                return <Container {...props}/>;
             return <Redirect to='/login'/>
        }}/>
    );
}

export default ProtectedRoute;