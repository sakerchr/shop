import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class MenuBar extends Component {

    render(){
        return this.props.loggedIn ? 
        <Nav fill variant="pills" activeKey="/">
            <Nav.Item>
                <Nav.Link eventKey="/" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link eventKey="/user" href="/user">User</Nav.Link>
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