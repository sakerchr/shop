import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import { Switch, Route } from "react-router-dom";
import ItemDetail from './components/itemDetail/itemDetail';
import MenuBar from './components/menuBar/menuBar';

class App extends Component {
  render() {
    return (
        <div className="center centerText background">
          <h1>The Item Shop</h1>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={ItemDetail}/>
          </Switch>
        </div>
    );
  }
}

export default App;
