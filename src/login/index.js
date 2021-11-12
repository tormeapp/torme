import React, { useState } from 'react'
import { loginUser } from '../fb';
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

    const handleLogin = () => {
        const user = loginUser(loginForm.username, loginForm.password);
        console.log(user);
    }

    return ( <div className="login-wrapper">
                <div className="title-wrapper">
                    <div className="title">TorMe Admin Workstation</div>
                    <div className="subtitle">login to start</div>
                </div>
                <div className="form-wrapper">
                    <div className="form-container">
                        <div className="inputs-wrapper">
                        <Input
                        name             ={"username"} 
                        type             ={"text"}
                        value            ={loginForm.username}
                        handleInputChange={handleInputChange}
                        placeholder      ={"Username/Email"}
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
                        handleOnClick ={() => handleLogin()}
                        />
                        </div>
                    </div>
                </div>
            </div> 
    );
}
 
export default LoginPage;