import React, { Fragment } from 'react';
import './App.css';
import ContactApp from './components/ContactApp';

let App = () => {
    return (
        <Fragment >
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm" >
                <a href="/" className='navbar-brand' > React with Contact App </a>
            </nav >
            <ContactApp />
        </Fragment >

    )
}
export default App;