import React, { useState } from 'react'
import './index.scss';

import Input from '../componenets/input';
import Button from '../componenets/button';

const LoginPage = () => {
    
    const[loginForm, setLoginForm] = useState({
            username: '',
            password: '',
    })

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(loginForm)
        setLoginForm(
        {
            ...loginForm,
            [e.target.name]: e.target.value,
        })
    }

    return ( <div className="login-wrapper">
                <div className="title-wrapper">
                    <div className="title">TorMe Admin Workstation</div>
                    <div className="subtitle">login to start</div>
                </div>
                <div className="form-wrapper">
                    <div className="form-container">
                        <Input
                        name             ={"username"} 
                        type             ={"text"}
                        value            ={loginForm.username}
                        handleInputChange={handleInputChange}
                        placeholder      ={"Username"}
                        />
                        <Input
                        name             ={"password"} 
                        type             ={"password"}
                        value            ={loginForm.password}
                        handleInputChange={handleInputChange}
                        placeholder      ={"Password"}
                        />
                        <Button
                        text             ={"Login"}
                        type             ={"accept"}
                        handleOnClick ={() => {alert('lol')}}
                        />
                    </div>
                </div>
            </div> 
    );
}
 
export default LoginPage;