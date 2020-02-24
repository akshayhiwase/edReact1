import React from 'react';
import Axios from 'axios'

const login = (props) => {
    const userClick = (e) => {
        console.log(e.target)
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.pwd.value
        }

        Axios.post("http://5d76bf96515d1a0014085cf9.mockapi.io/login", data)
            .then((response) => {
                alert("Login Successfull")
                props.onLoginBtnClick()
                props.value.history.push("/")
                localStorage.setItem("User", JSON.stringify(data))

            })
            .catch((err) => {
                alert("Login Unsuccesful")
            })
    }

    return (
        <div>
            <h1>This IS login Page</h1>
            <form action="" onSubmit={(e) => userClick(e)}>
                <input type="text" name="username" />
                <input type="password" name="pwd" />
                {
                    props.userLoggedIn ? <h1>User Already Logged in</h1> : <button >Login Now</button>
                }
            </form>

        </div>
    )
}

export default login;