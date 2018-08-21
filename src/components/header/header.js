import React, { Component } from 'react';
import './header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="section-content">
                <h1 className="content-header">
                    <Link to='/'>Get Money with best credit online</Link>
                </h1>
                <h2>24/7 support. Free games for best clients</h2>
            </div>
        );
    }
}

export default Header;