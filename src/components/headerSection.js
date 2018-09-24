import  logo from '../sunwing-logo.png'
import '../App.css'
import React from 'react'
import Link from "react-router-dom/es/Link";
const  headerSection= props => {
    return(
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-TopBar">
                <Link to={`/`} className='MenuLink'>Destination</Link>
            </div>
        </div>

    );
};

export default  headerSection;