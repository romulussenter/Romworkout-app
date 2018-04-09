import React  from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Nav = props => (
    <nav className='navbar'>
        <ul className='nav'>
            <li className='nav-item'>
               
                <Link to='/'>My Workouts</Link>
            </li>
            
        </ul>
    </nav>
);

export default Nav;