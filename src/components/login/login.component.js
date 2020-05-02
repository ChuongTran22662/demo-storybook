import React from 'react';
import './login.styles.css';
import { Input,Button } from 'reactstrap';

class Login extends React.Component{
    render(){
        return (
            <div className="container">
                <h2 className="title">Login</h2>
                <label className='email'>Email</label>
                <Input className="email-input" placeholder="email"></Input>
                <label className='password'>Password</label>
                <Input className="password-input" placeholder="password"></Input>

                <Button color="primary">Login</Button>
            </div>
        )
    }
}

export default Login;