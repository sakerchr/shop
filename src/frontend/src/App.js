import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import ItemDetail from './components/itemDetail/itemDetail';
import MenuBar from './components/menuBar/menuBar';
import Login from './components/login/login';
import User from './components/user/user';
import ReviewDetail from './components/reviewDetail/reviewDetail';
import OrderDetail from './components/orderDetail/orderDetail';
import { getIsLoggedIn, postLogout } from './api';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.loginCallback = this.loginCallback.bind(this);
  }

  componentWillMount(){
    getIsLoggedIn().then(response => {
      this.setState({loggedIn: response.data =="true"});
    });
  }

  loginCallback = function(loggedIn){
    this.setState({loggedIn: loggedIn});
    if (! loggedIn) postLogout();
  }


  render() {
    return (
        <div className="center centerText App">
          <h1>The Item Shop</h1>
          <MenuBar loggedIn={this.state.loggedIn} logout={() => this.loginCallback(false)}/>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.loggedIn ? <Home /> : <Login loginCallback={this.loginCallback} />
            )}/>
            <PrivateRoute path="/user" component={User} isLoggedIn={this.state.loggedIn}/>
            <Route path="/item/:id" component={ItemDetail}/>
            <Route path="/review/:id" component={ReviewDetail}/>
            <Route path="/order/:id" component={OrderDetail}/>
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
