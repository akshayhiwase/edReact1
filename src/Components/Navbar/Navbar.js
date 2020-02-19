import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css';

const navbar = () => {
    return (

        <div className={classes.navbar}>
            <Link to="/">Homepage</Link>
            <Link to="/about">AboutUs</Link>
            <Link to="/contact">Contacts</Link>



        </div>

    )
}

export default navbar;