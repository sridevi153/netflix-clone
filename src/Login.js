import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) { 
            navigate('/home'); 
        } else {
            alert('Please enter valid credentials.');
        }
    }

    return (
        <div>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='logo'></img>
            <img className='background' src='https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200' alt='background image'></img>
           <div className="login-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="email" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        placeholder='Email or PhoneNumber'
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        placeholder='Password'
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div> 
    )
}

export default Login;
