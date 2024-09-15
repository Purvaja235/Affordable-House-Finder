import React from 'react';

const Login = () => {
    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
