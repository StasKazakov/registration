import React, {useState} from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginRegister.css'

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const [usernamePlaceholder, setUsernamePlaceholder] = useState('Username'); 
    const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password'); 
    const [emailPlaceholder, setEmailPlaceholder] = useState('Email');


    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text"
                         placeholder={usernamePlaceholder}
                         onFocus={() => setUsernamePlaceholder('')}
                         onBlur={() => setUsernamePlaceholder('Username')}
                         required />
                         <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password"
                         placeholder={passwordPlaceholder}
                         onFocus={() => setPasswordPlaceholder('')}
                         onBlur={() => setPasswordPlaceholder('Password')}
                         required />
                         <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />
                        Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick=
                        {registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text"
                         placeholder={usernamePlaceholder}
                         onFocus={() => setUsernamePlaceholder('')}
                         onBlur={() => setUsernamePlaceholder('Username')}
                         required />
                         <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email"
                         placeholder={emailPlaceholder}
                         onFocus={() => setEmailPlaceholder('')}
                         onBlur={() => setEmailPlaceholder('Email')}
                         required />
                         <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password"
                         placeholder={passwordPlaceholder}
                         onFocus={() => setPasswordPlaceholder('')}
                         onBlur={() => setPasswordPlaceholder('Password')}
                         required />
                         <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />
                        I agree to terms & conditions</label>
                    </div>

                    <button type='submit'>Register</button>

                    <div className="register-link">
                        <p>Alredy have an account? <a href="#" onClick=
                        {loginLink}>Login</a></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginRegister;   