import React from 'react';
import './styles.css'

const Navbar = () => {
    return <div className="page-navbar">
        <div>
          <a className="logo" href="#!">
            <h1>RideShare</h1>
          </a>
        </div>
        <div>
            <ul>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </div>
      </div>;
};

export default Navbar;