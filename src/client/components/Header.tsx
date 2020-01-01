import * as React from 'react';
import {
    Link
  } from "react-router-dom";
  
class Header extends React.Component {
    render() {
        return (
            <nav className='header'>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/article">Article</Link>
                    </li>
                    <li>
                    <Link to="/list">List</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;