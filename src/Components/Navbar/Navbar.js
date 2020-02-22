import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css';

const navbar = (props) => {
    console.log(props.user)
    return (

        <div className={classes.navbar}>
            <Link to="/">Homepage</Link>
            <Link to="/about">AboutUs</Link>
            <Link to="/contact">Contacts</Link>
            {
                props.user ? <button onClick={props.onLogOutBtnClick}>Loggout</button> : <Link to="/login">LogIn</Link>
            }





        </div>

    )
}

export default navbar;