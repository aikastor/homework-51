import React, {Component} from 'react';
import './Navbar.css';


class Navbar extends Component{
    render() {
        return(
            <ul className="sidenav">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        )
    }
}

export default Navbar;