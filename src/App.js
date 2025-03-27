import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './componentes/sidebarMenu/sidebar';
import SideBarMobile from './componentes/sidebarMenu/sideBarMobile';
import Main from './componentes/_main/main';
import Header from './componentes/_header/Header';
const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);


    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setSidebarOpen(!mobile); // Sidebar open by default on large screens
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <Router>
            <div className={`container ${sidebarOpen ? "with-sidebar" : "full-width"}`}>
                <Header />
                <div className="content">
                    {/* <Sidebar /> */}
                    <SideBarMobile isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} isMobile={isMobile} />
                    <Main />
                </div>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
