import React, { Component } from 'react';
import { postLogin } from '../../api';


class Login extends Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login = function(event) {
        event.preventDefault();
        var username = document.getElementById("username-input").value;
        var password = document.getElementById("password-input").value;
        postLogin(username, password).then((response) => {
            this.props.loginCallback(response.status == 202);
        });
    }

    render(){
        return(
            <div>
                <form id="login-form" onSubmit={this.login}>
                    <div>
                        <label for="username-input">Username:</label>
                        <br />
                        <input type="text" id="username-input" name="username-input"
                            required="true" autofocus="true"/>
                    </div>
                    <div>
                        <label for="password-input">Password:</label>
                        <br />
                        <input type="password" id="password-input" name="password-input"
                            required="true"/>
                    </div>
                    <input type="submit" form="login-form" value="Login" />
                </form>
            </div>
        );
    }

}

export default Login;