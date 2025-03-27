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


            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="parent-icon">
                    <MenuLogo />
                </div>

                <nav>
                    <ul>

                        <MenuLink text={"בית"} navto={""} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"מי אנחנו"} navto={"about"} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"לוח אירועים"} navto={"events"} location={location} menuSelection={menuSelection} isSub={false} />

                        <MenuLink text={"אקולוגיה וגידול ירק ביער"} navto={"vegetables"} location={location} menuSelection={menuSelection} isSub={false} />
                        <MenuLink text={"פעילויות לילדים"} navto={"kids"} location={location} menuSelection={menuSelection} />

                        <MenuLink text={"קורסים"} navto={"courses"} location={location} menuSelection={menuSelection} />

                        {/* <li className={location.pathname === "/courses" ? "active" : ""}>
                            <Link to="/courses" onClick={(e) => menuSelection(e, "/courses")} onTouchEnd={(e) => menuSelection(e, "/courses")}>
                                קורסים</Link>
                        </li> */}

                        {/* <li className={location.pathname === "/courses" ? "active" : ""}>
                            <Link to="/courses" onClick={(e) => menuSelection(e, "/courses")} >
                                קורסים</Link>
                        </li> */}

                        <li className={openSubmenus.more ? "open" : ""} onClick={() => toggleSubmenu("more")} onTouchStart={(e) => e.stopPropagation()}>
                            <MenuItem text="תכנים נוספים" />
                            {openSubmenus.more && (
                                <ul className="submenu">

                                    <MenuLink text={"דבורים"} navto={"bees"} location={location} menuSelection={menuSelection} isSub={true} />
                                    <MenuLink text={"ספרייה שיתופית"} navto={"library"} location={location} menuSelection={menuSelection} isSub={true} />
                                    <MenuLink text={"חדר מוזיקה"} navto={"music-room"} location={location} menuSelection={menuSelection} isSub={true} />
                                    <MenuLink text={"תערוכת אומנות מעץ"} navto={"wood-art-galery"} location={location} menuSelection={menuSelection} isSub={true} />


                                    {/* <li className={location.pathname === "/bees" ? "active" : ""}>
                                        <Link to="/bees" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>דבורים</Link>
                                    </li> */}
                                    {/* <li className={location.pathname === "/library" ? "active" : ""}>
                                        <Link to="/library" onClick={(e) => menuSelection(e, "/library", true)} onTouchStart={(e) => menuSelection(e, "/library", true)}>ספרייה שיתופית ביער</Link>
                                    </li> */}
                                    {/* <li className={location.pathname === "/music-room" ? "active" : ""}>
                                        <Link to="/music-room" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>חדר מוזיקה</Link>
                                    </li> */}
                                    {/* <li className={location.pathname === "/wood-art-galery" ? "active" : ""}>
                                        <Link to="/wood-art-galery" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>תערוכת אומנות מעץ</Link>
                                    </li> */}



                                    {/* <li className={location.pathname === "/wood-therapy" ? "active" : ""}>
                                        <Link to="/wood-therapy" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>תרפיה ביצירה מעץ</Link>
                                    </li>
                                    <li className={location.pathname === "/rehabilitation" ? "active" : ""}>
                                        <Link to="/rehabilitation" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>שיקום מפוסט טראומה</Link>
                                    </li>
                                    <li className={location.pathname === "/gallery" ? "active" : ""}>
                                        <Link to="/gallery" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>גלריית הפסלים שלנו</Link>
                                    </li> */}

                                </ul>
                            )}
                        </li>

                        {/* <li className={location.pathname === "/blog" ? "active" : ""}>
                            <Link to="/blog">בלוג</Link>
                        </li> */}

                        <MenuLink text={"מתנדבים"} navto={"volunteers"} location={location} menuSelection={menuSelection} isSub={true} />
                        <MenuLink text={"יצירת קשר"} navto={"contact"} location={location} menuSelection={menuSelection} isSub={true} />
                        <MenuLink text={"הצטרפות לעמותה"} navto={"join"} location={location} menuSelection={menuSelection} isSub={true} />

                        {/* <li className={location.pathname === "/volunteers" ? "active" : ""}>
                            <Link to="/volunteers">מתנדבים</Link>
                        </li> */}

                        {/* <li className={location.pathname === "/contact" ? "active" : ""}>
                            <Link to="/contact">יצירת קשר</Link>
                        </li> */}
                        {/* <li className={location.pathname === "/join" ? "active" : ""}>
                            <Link to="/join">הצטרפות לעמותה</Link>
                        </li> */}
                    </ul>

                </nav>
            </aside>
        </>
    );
}

export default SideBarMobile;



// import "./sidebar.css";

// function SideBarMobile({ isMobile, toggleSidebar }) {
//     const location = useLocation();
//     const [isOpen, setIsOpen] = useState(!isMobile); // Open by default on larger screens

//     // Close sidebar on resize if needed
//     useEffect(() => {
//         setIsOpen(!isMobile);
//     }, [isMobile]);

//     return (
//         <>
//             {isMobile && (
//                 <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
//                     {isOpen ? "✖" : "☰"}
//                 </button>
//             )}

//             <aside className={`sidebar ${isOpen ? "open" : ""}`}>
//                 <div className="parent-icon">
//                     <MenuLogo />
//                 </div>

//                 <nav>
//                     <ul>
//                         <li className={location.pathname === "/" ? "active" : ""}>
//                             <Link to="/" onClick={isMobile ? toggleSidebar : undefined}>בית</Link>
//                         </li>
//                         <li className={location.pathname === "/about" ? "active" : ""}>
//                             <Link to="/about" onClick={isMobile ? toggleSidebar : undefined}>עלינו</Link>
//                         </li>
//                         <li className={location.pathname === "/events" ? "active" : ""}>
//                             <Link to="/events" onClick={isMobile ? toggleSidebar : undefined}>לוח אירועים</Link>
//                         </li>
//                         <li className={location.pathname === "/contact" ? "active" : ""}>
//                             <Link to="/contact" onClick={isMobile ? toggleSidebar : undefined}>יצירת קשר</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </aside>
//         </>
//     );
// }

// export default SideBarMobile;

