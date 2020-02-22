import React from 'react';

const login = (props) => {
    return (
        <div>
            <h1>This IS login Page</h1>
            {
                props.userLoggedIn ? <h1>User Already Logged in</h1> : <button onClick={props.onLoginBtnClick}>Login Now</button>
            }


        </div>
    )
}

export default login;