import React from 'react';
import classes from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/AboutUs/About'
import Contact from './Components/Contacts/Contact'
import Details from './Components/Details/Details'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <BrowserRouter>
        <div className={classes.main_container}>
          <Navbar />
          <Switch>
            <Route path={"/about"} component={About} />
            <Route path={"/contact"} component={Contact} />
            <Route path={"/details/:id"} component={Details} />
            <Route path={"/"} component={Homepage} />
          </Switch>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;

