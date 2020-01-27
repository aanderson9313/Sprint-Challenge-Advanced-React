import React from "react";
import { useLightMode } from './hooks/useLightMode';
import '../components/navbar.css';


const Navbar = () => {
    const [lightMode, setLightMode] = useLightMode(false);
    return (
      <nav className = "nav">
        <h1 className = "title">Women's World Cup 2019 Player Rankings</h1>
        <div>
          <button 
            onClick={
              e => {
                  e.preventDefault();
                  setLightMode(!lightMode);
                  if(!lightMode) {
                      e.target.textContent = "Dark Mode"
                  }
                  else 
                      e.target.textContent = "light Mode"
              }
            }
            className={lightMode ? "toggle toggled" : "toggle"}
          >
            Light Mode
          </button>
        </div>
      </nav>
    );
  };

  export default Navbar;