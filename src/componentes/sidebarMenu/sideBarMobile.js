import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./menu-item/menuItem";
import MenuLogo from "./menu-logo/menuLogo";
import MenuLink from "./menu-link/MenuLink";

import "./SideBarMobile.css";



function SideBarMobile({ isOpen, toggleSidebar, isMobile }) {
    const location = useLocation();
    const [openSubmenus, setOpenSubmenus] = useState({});

    const navigate = useNavigate();


    const toggleSubmenu = (menu) => {
        setOpenSubmenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };


    const menuSelection = (e, path, subMenu = false) => {
        console.log('e.type', e.type);
        if (subMenu) {
            e.stopPropagation();
        }

        navigate(path);
        if (isMobile) {
            toggleSidebar();
        }
    }

    return (
        <>
            {isMobile &&
                <button className="menu-toggle" onClick={toggleSidebar} onTouchStart={toggleSidebar}>
                    {isOpen ? "✖" : "☰"}
                </button>
            }

            {isMobile && isOpen && (
                <div className="sidebar-backdrop" onAnimationEnd={toggleSidebar}></div>
            )}

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="parent-icon">
                    <MenuLogo />
                </div>
                <nav>
                    <ul>

                        <MenuLink text={"בית"} navto={""} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"מי אנחנו"} navto={"about"} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"לוח אירועים"} navto={"events"} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"אקולוגיה וגידול ירק"} navto={"vegetables"} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"פעילויות לילדים"} navto={"kids"} location={location} menuSelection={menuSelection} />
                        <MenuLink text={"קורסים"} navto={"courses"} location={location} menuSelection={menuSelection} />

                        <li className={openSubmenus.more ? "open" : ""} onClick={() => toggleSubmenu("more")} onTouchStart={(e) => e.stopPropagation()}>
                            <MenuItem text="תכנים נוספים" />
                            {openSubmenus.more && (
                                <ul className="submenu">
                                    <MenuLink text={"דבורים"} navto={"bees"} location={location} menuSelection={menuSelection} isSub={true} />
                                    <MenuLink text={"ספרייה שיתופית"} navto={"library"} location={location} menuSelection={menuSelection} isSub={true} />
                                    <MenuLink text={"חדר מוזיקה"} navto={"music-room"} location={location} menuSelection={menuSelection} isSub={true} />
                                    <MenuLink text={"תערוכת אומנות מעץ"} navto={"wood-art-galery"} location={location} menuSelection={menuSelection} isSub={true} />
                                </ul>
                            )}
                        </li>

                        <MenuLink text={"מתנדבים"} navto={"volunteers"} location={location} menuSelection={menuSelection} isSub={true} />
                        <MenuLink text={"יצירת קשר"} navto={"contact"} location={location} menuSelection={menuSelection} isSub={true} />
                        <MenuLink text={"הצטרפות לעמותה"} navto={"join"} location={location} menuSelection={menuSelection} isSub={true} />
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default SideBarMobile;




