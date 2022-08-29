import React from 'react';

const MusicSubMenu = ({ activeMusicSubItem }) => {
    console.log(activeMusicSubItem);
  return (
      <div className="container">
          <h2>iPod.js</h2>
          <ul className='side__menu'>
              <li className={activeMusicSubItem === 'All Songs' ? 'option active' : 'option'}>
                  <span>All Songs</span>
                  <i className={activeMusicSubItem === 'All Songs' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
              </li>
              <li className={activeMusicSubItem === 'Albums' ? 'option active' : 'option'} >
                  <span>Albums</span>
                  <i className={activeMusicSubItem === 'Albums' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
              </li>
              <li className={activeMusicSubItem === 'Artist' ? 'option active' : 'option'}>
                  <span>Artist</span>
                  <i className={activeMusicSubItem === 'Artist' ? 'fa-solid fa-angle-right visible' : 'fa-solid fa-angle-right hidden'}></i>
              </li>
          </ul>
      </div>
  )
}

export default MusicSubMenu;