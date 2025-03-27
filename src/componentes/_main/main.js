import { Route, Routes } from 'react-router-dom';

import Home from '../home/home.js';
import About from '../_about/about.js';
import Contact from '../_contact/contactForm.js';
import Join from "../join-us/join.js"
import Events from "../events/events.js"
import Footer from "../_footer/footer.js"

import './main.css';
const Main = () => {
    return (
        <main>
            <div className='main-start'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/events" element={<Events />} />

                </Routes>
            </div>
            <Footer />
        </main>
    )
}

export default Main;
