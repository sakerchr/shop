import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './menuBar.css';

class MenuBar extends Component {

    render(){
        return this.props.loggedIn ? 
        <Nav className="menuBar" justify variant="pills" activeKey="/">
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item >
                <Link to="/user">User</Link>
            </Nav.Item>
            <Nav.Item>
                <Button onClick={this.props.logout}>logout</Button>
            </Nav.Item>
        </Nav> 
        :
         <Redirect to="/" />
    }

}

export default MenuBar;