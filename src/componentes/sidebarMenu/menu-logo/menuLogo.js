import React, { useEffect, useState } from "react";
import { ReactComponent as MenuIcon } from "./tree-Croped.svg";
import './menuLogo.css';

const MenuLogo = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 700); // Reset after animation duration
    }, 30000); // 30 seconds interval

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <button className="menu-button">
      <MenuIcon className={shake ? "shake" : ""} />
    </button>
  );
};

export default MenuLogo;
