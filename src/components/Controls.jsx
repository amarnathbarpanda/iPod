import React, { useState } from 'react';
import './Controls.css';




const Controls = ({ home, rotateFunction, navigation }) => {

  return (
    <div id="controls" onMouseOver={()=>rotateFunction()}
      draggable="false">
        
      <div className="inner_circle" onClick={() => navigation()}>  
        </div>        
        <span className="menu" onClick={()=> home()}>Menu</span>
        <span className="left">
            <i className="fa-solid fa-backward-fast"></i>
        </span>
        <span className="right">
            <i className="fa-solid fa-forward-fast"></i>
        </span>
        <span className="bottom">
            <i className="fa-solid fa-pause"></i>
        </span>
    </div>
  )
}

export default Controls