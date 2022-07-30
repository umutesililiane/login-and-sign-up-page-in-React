import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
function Main() {;
  return (
    <Router>
      
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" component={<Login />} />
              <Route path="/sign-in" component={<Login />} />
              <Route path="/sign-up" component={<SignUp />} />
            </Routes>
          </div>
        </div>
      
    </Router>
  )
}
export default Main