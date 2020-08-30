import React from 'react';
import {BrowserRouter, Route} from'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import ProtectedRoute from './Routers/ProtectedRoute';
import "./App.css";

const App:React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ProtectedRoute path ='/' exact />
      <Route path='/login' exact strict component={LoginPage}/>
    </BrowserRouter>
  );
}

export default App;