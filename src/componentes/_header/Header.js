import { FaHandsHelping } from "react-icons/fa";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { useState, useEffect } from "react";
import { ReactComponent as headerLogo } from "./hands-holding-heart.svg";
import "./header.css";

const Header = () => {
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        // Trigger initial slide-in effect after component mounts
        setTimeout(() => setSlide(true), 100);

        const interval = setInterval(() => {
            setSlide(false); // Reset
            setTimeout(() => setSlide(true), 100); // Re-slide
        }, 20000); // Every 2 minutes

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <header className={`header ${slide ? "slide-in" : "slide-out"}`}>
            <FaHandsHoldingCircle className="icon" />
            <span className="myheader">בידיים שלנו</span>
            <FaHandsHoldingCircle className="icon" />
        </header>
    );
};

export default Header;
