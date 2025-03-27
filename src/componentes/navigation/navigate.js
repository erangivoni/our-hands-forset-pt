import React from 'react';
import { Link } from 'react-router-dom';
import '../sidebarMenu/SideBarMobile.css';

const Sidebar = ()=> {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/">דף הבית</Link></li>
                    <li><Link to="/salon">הזמנה לסלון גדול</Link></li>
                    <li><Link to="/materials">הזמנת חומר לאמן</Link></li>
                    <li><Link to="/pre-made">הזמנת יצירה מראש</Link></li>
                    <li><Link to="/kids">פעילויות לילדים</Link></li>
                    <li><Link to="/garden">גינת הירק שלנו</Link></li>
                    <li><Link to="/forest">יער מאכל</Link></li>
                    <li><Link to="/waste">פינוי אשפה</Link></li>
                    <li><Link to="/gallery">גלריית הפסלים שלנו</Link></li>
                    <li><Link to="/therapy">תרפיה ביצירה מעץ</Link></li>
                    <li><Link to="/rehabilitation">שיקום מפוסט טראומה</Link></li>
                    <li><Link to="/about">עלינו</Link></li>
                    <li><Link to="/contact">יצירת קשר</Link></li>
                    <li><Link to="/join">הצטרפות לעמותה</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;