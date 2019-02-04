import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./menuBar.css"

class MenuBar extends Component {

    render(){
        return this.props.loggedIn ? 
        (<div className="menuBar" hidden={this.props.loggedIn}>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <button onClick={this.props.logout}>logout</button>
        </div>)
        : <Redirect to="/" />
    }

}

export default MenuBar;