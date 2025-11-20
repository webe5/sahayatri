import React from "react";
import leftImage from "../login-left.jpg"; 
const LoginPage = ({ onLogin }) => {
  return (
    <div className="gov-light-login-page">
      <div className="gov-light-login-card">
        {/* LEFT SIDE IMAGE PANEL */}
        <div className="gov-light-left">
          <img src={leftImage} alt="Welcome" className="gov-light-left-img" />

          <div className="gov-light-left-text">
            <h2>Welcome Back</h2>
            <p>
              Please sign in using your official Jharkhand Tourism admin
              credentials to continue.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE LOGIN FORM */}
        <div className="gov-light-right">
          <h2 className="gov-light-login-title">Login</h2>

          <form
            className="gov-light-login-form"
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            <label>Email</label>
            <input type="email" required placeholder="admin@jharkhand.gov" />

            <label>Password</label>
            <input type="password" required placeholder="Enter password" />

            <button type="button" className="gov-light-forgot">
              Forgot password?
            </button>

            <button type="submit" className="gov-light-login-btn">
              Log In
            </button>

            <p className="gov-light-footer">
              Need access? <span className="gov-light-link">Request admin ID</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
