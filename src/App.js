import React from 'react';
import classes from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './Components/AboutUs/About'
import Contact from './Components/Contacts/Contact'
import Details from './Components/Details/Details'
import Login from './Components/LoginPage/Login'
import Notfound from './Components/NotFound/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: false,

    }
  }

  onLoginBtnClick = () => {
    this.setState({ loginUser: true })
  }
  onLogoutBtnClick = () => {
    this.setState({ loginUser: false })
  }
  render() {

    return (

      <BrowserRouter>
        <div className={classes.main_container}>
          <Navbar onLogOutBtnClick={this.onLogoutBtnClick} user={this.state.loginUser} />
          <Switch>
            <Route path={"/about"} component={About} />
            <Route path={"/contact"} component={Contact} />
            <Route path={"/login"} render={() => <Login userstatus={this.state.loginUser} onLoginBtnClick={this.onLoginBtnClick} />} />
            <Route path={"/details/:id"} render={(routeParams) => this.state.loginUser ? <Details params={routeParams} /> : <Redirect to="/login" />} />
            <Route path="/not-found" component={Notfound} />
            <Route exact path={"/"} component={Homepage} />
            <Route render={() => <Redirect to="/not-found" />} />
          </Switch>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;

