import React, { useState } from 'react'
const Login = () => {
    return (
      <form center>
        <h3>Login</h3>
        <h7>welcome back! Login with your credentials</h7>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label  >
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
       
          <p className="forgot-password text-right">
          don't have an account? <a href="/sign-up">sign up</a>
        </p>
        
      </form>
    )
  }

export default Login;