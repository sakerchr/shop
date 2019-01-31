import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./menuBar.css"

class MenuBar extends Component {

    render(){
        return(
            <div className="menuBar">
                <Link to="/">Home</Link>
                <Link to="/">User</Link>
            </div>
        );
    }

}

export default MenuBar;