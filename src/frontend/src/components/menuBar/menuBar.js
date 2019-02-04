import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./menuBar.css"

class MenuBar extends Component {

    render(){
        return this.props.loggedIn ? 
        (<div className="menuBar" hidden={this.props.loggedIn}>
            <Link to="/">Home</Link>
            <Link to="/">User</Link>
            <button onClick={this.props.logout}>logout</button>
        </div>)
        : <div></div> 
    }

}

export default MenuBar;