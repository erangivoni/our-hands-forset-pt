import React, { useState, useEffect } from "react";
import './home.css';
import SemiContact from "../semi-contact/semiContact";
import ImageText from "../imageAndtext/imageText";


const imageContents = [
    {icon: "/images/brand-khanacademy-svgrepo-com.svg", title: "גינת ירק"},
    {icon: "/images/library-svgrepo-com (5).svg", title: "ספורט ופנאי"},
    {icon: "/images/music-notes-svgrepo-com.svg", title: "תרבות ומוסיקה"},
    {icon: "/images/yoga-position-svgrepo-com.svg", title: "פעילות גוף ותנועה"},
    {icon: "/images/trunk-wood-svgrepo-com (2).svg", title: "יצירה ואומנות"},
    {icon: "/images/children-movement-svgrepo-com.svg", title: "קהילה וחינוך"},
    {icon: "/images/history-svgrepo-com.svg", title: "מורשת והיסטוריה"},

    {icon: "/images/outdoor-trip-signpost-svgrepo-com.svg", title: "תיירות וטיולים"},
    {icon: "/images/support-svgrepo-com.svg", title: "תמיכה חברתית"},
    {icon: "/images/potion-svgrepo-com.svg", title: "שיקום ומחזור"},
    {icon: "/images/social-distancing-svgrepo-com (1).svg", title: "מסחר חברתי"},
    {icon: "/images/tortoise-animals-svgrepo-com.svg", title: "טבע ובעלי חיים"},


]

const videos = [
    { src: "/videos/bees1.mp4", text: "  טיפוח דבורים ודבש טבעי" },
    { src: "/videos/forest1.mp4", text: " יער אקולוגי" },
    { src: "/videos/garden-beds1.mp4", text: "ערוגות ושתילות" },
    { src: "/videos/olive-tree1.mp4", text: "עצי זית" },
    { src: "/videos/plant-construct1.mp4", text: "טכנולוגיית גידול מודרנית" },


];

function Home() {

    const [currentVideo, setCurrentVideo] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className='fade-in-display'>
            <h2>ברוכים הבאים</h2>
            <p className="title-p"> כאן תוכלו לקבל ממגןן פעילויות והעשרות לכל הגילאים בתחום החינוך, שיקום, העשרה, אמנות ופעילויות לילדים</p>


            <div className="video-container">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`video-wrapper ${currentVideo === index ? "show" : ""}`}
                    >
                        <video className="video" src={video.src} autoPlay muted loop />
                        <div className={`text-overlay ${currentVideo === index ? "fadeIn" : ""}`}>
                            {video.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="imageContents">
                {imageContents.map((content, index)=>(
                    <ImageText title={content.title} icon = {content.icon} size={"small"}/>
                ))}


            </div>



            <div className="keep-in-touch"> 
                <SemiContact />
            </div>
        </div >
    );


}

export default Home;