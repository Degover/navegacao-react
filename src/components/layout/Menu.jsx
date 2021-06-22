import './Menu.css'
import React from 'react';

import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/param/1">Param #01</Link></li>
                    <li><Link to="/param/legal">Param #02</Link></li>
                    <li><Link to="/naoExiste">Não existe</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;
