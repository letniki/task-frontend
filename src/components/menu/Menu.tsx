import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <ul className='block'>
            <li><Link className='Link' to={'/type-param'}>type-param</Link></li>
            <li><Link className='Link' to={'/type-obj'}>type-obj</Link></li>
            <li><Link className='Link' to={'/lib-param'}>lib-param</Link></li>
            <li><Link className='Link' to={'/measure'}>measure</Link></li>
        </ul>
    )
};

export default Menu;