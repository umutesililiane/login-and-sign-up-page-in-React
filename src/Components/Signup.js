import React, { Component } from 'react'
 class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <h7>Create an account , it's free</h7>
         <div className="mb-3">
          <label>Email </label>
          <input type="email" className="form-control"
            placeholder="Enter email"/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control"
           placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-danger">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">Login</a>
        </p>
      </form>
    )
  }
}
export default SignUp