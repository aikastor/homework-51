import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    render() {
        return(
            <header>
                <div className="topnav">
                    <a className="active" href="#">Home</a>
                    <a href="#">News</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                </div>
            </header>
        )
    }
}

export default Header;