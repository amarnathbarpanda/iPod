import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';

import ZingTouch from 'zingtouch';
import { useNavigate, Routes, Route } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import CoverFlow from './components/pages/CoverFlow';
import Music from './components/pages/Music';
import Games from './components/pages/Games';
import Settings from './components/pages/Settings';

//global variable for utility
let currentAngle;
let lastRoundAngle = 0;

function App() {

  const [data, setData] = useState({
    activeItem: 'Cover Flow',
    route: '/coverflow',
    activeMusicSubItem: 'All Songs'
  });

  const navigate = useNavigate();

  // function to add rotate event to the controls
  const rotateFunction = () => {
    var target = document.getElementById("controls");
    var region = new ZingTouch.Region(target);
   
    currentAngle = 0;

    //binding rotate evet with controls
    region.bind(target, "rotate", (e) => {

      currentAngle += e.detail.distanceFromLast;
      const myAngle = Math.round(currentAngle % 360);

      //change menu based on rotation
      if (Math.abs(lastRoundAngle - myAngle) >= 60) {

        //clockwise rotation

        if (e.detail.distanceFromLast > 0) {
          
          if (data.activeItem === "Cover Flow") {
            setData({...data,
              activeItem: "Music",
              route: "/music"
            });
          } else if (data.activeItem === "Music") {
            setData({
              ...data,
              activeItem: "Games",
              route: "/games"
            });
          } else if (data.activeItem === "Games") {
            setData({
              ...data,
              activeItem: "Settings",
              route: "/settings"
            });
          } else {
            setData({
              ...data,
              activeItem: "Cover Flow",
              route: "/coverflow"
            });
          }
        } else {
          //anti-clockwise rotation
          
            if (data.activeItem === "Cover Flow") {
              setData({
                ...data,
                activeItem: "Settings",
                route: "/settings"
              });
            } else if (data.activeItem === "Settings") {
              setData({
                ...data,
                activeItem: "Games",
                route: "/games"
              });
            } else if (data.activeItem === "Games") {
              setData({
                ...data,
                activeItem: "Music",
                route: "/music",
              });
            } else {
              setData({
                ...data,
                activeItem: "Cover Flow",
                route: "/coverflow"
              });
          }
        }
        lastRoundAngle = myAngle;
      }

    });
  };

  //to navigate to menu
  const home = () => {
    navigate('/');
  };

  //to navigate through the menu options
  const navigation = () => {
    navigate(data?.route);
  }

  return (

    <div className="App">
      <div className='screen'>
        <Routes>
          <Route path="/" element={<SidebarMenu activeItem={data.activeItem} />} />
          <Route path="/coverflow" element={<CoverFlow />} />
          <Route path="/music" element={<Music activeMusicSubItem={data.activeMusicSubItem}/>} />
          <Route path="/games" element={<Games />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <Controls home={home} rotateFunction={rotateFunction} navigation={navigation} />
    </div>

  );
}

export default App;
