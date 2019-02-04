import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import ItemDetail from './components/itemDetail/itemDetail';
import MenuBar from './components/menuBar/menuBar';
import Login from './components/login/login';
import User from './components/user/user';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.loginCallback = this.loginCallback.bind(this);
  }

  loginCallback = function(loggedIn){
    this.setState({loggedIn: loggedIn});
  }


  render() {
    return (
        <div className="center centerText background">
          <Link to="/"><h1>The Item Shop</h1></Link>
          <MenuBar loggedIn={this.state.loggedIn} logout={() => this.loginCallback(false)}/>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.loggedIn ? <Home /> : <Login loginCallback={this.loginCallback} />
            )}/>
            <PrivateRoute path="/user" component={User} isLoggedIn={this.state.loggedIn}/>
            <Route path="/item/:id" component={ItemDetail}/>
          </Switch>
        </div>
    );
  }
}

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}



export default App;
