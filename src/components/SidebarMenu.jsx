import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({activeItem}) => {
    return (
        <div className="container">
            <h2>iPod.js</h2>
            <ul className='side__menu'>
                <li className={activeItem === 'Cover Flow'? 'option active' : 'option'}>
                    <span>Cover Flow</span>
                    <i className={activeItem === 'Cover Flow' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
                </li>
                <li className={activeItem === 'Music' ? 'option active' : 'option'} >
                    <span>Music</span>
                    <i className={activeItem === 'Music' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
                </li>
                <li className={activeItem === 'Games' ? 'option active' : 'option'}>
                    <span>Games</span>
                    <i className={activeItem === 'Games' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
                </li>
                <li className={activeItem === 'Settings' ? 'option active' : 'option'}>
                    <span>Settings</span>
                    <i className={activeItem === 'Settings' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
                </li>
            </ul>
        </div>

    )
}

export default SidebarMenu;