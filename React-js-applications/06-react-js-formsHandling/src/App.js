import React, { Fragment } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import UserName from './components/UserName';
import RegistationForm from './components/RegistationForm';


let App = () => {
    return (
        <Fragment >
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                < a href="/" className='navbar-brand' > React with form Handling </a> </nav >
            { /* <UserName /> */} { /* <LoginForm /> */}
            <RegistationForm />
        </Fragment >

    )
}
export default App;