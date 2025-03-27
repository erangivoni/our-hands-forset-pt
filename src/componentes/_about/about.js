import React from 'react';
import ImageSlider from '../image-slider/imageSlider';
import aboutImage from "../../assets/people-build-hands.png";
import forestTrres from "./forest4.jpeg"
import oliveTree from "./olive-tree.jpeg"
import garden_eds2 from "./garden-beds2.jpeg"
import ImageText from "../imageAndtext/imageText.js";


import GoogleMap from '../map/GoogleMap.js';
import './about.css';

const images = [
    { src: "/images/forest3.jpeg", text: "בואו לסייר ביער שלנו" },
    { src: "/images/bees2.jpeg", text: "לצפות בדבורים ובתרומתם המשמעותית" },
    { src: "/images/boat1.jpeg", text: "לבקר בתיבת נוח עם הילדים" },

];

const imageTexts = [
    {
        title: "מי אנחנו", text: "העמותה שלנו שואפת לשפר את איכות החיים באמצעות פעילויות קהילתיות ייחודיות."
            + " אנו מקדמים חינוך, תרבות וסיוע לכלל האוכלוסייה.", icon: forestTrres
    },
    {
        title: "החזון שלנו", text: "הסיפור שלנו מתחיל בחזון לאפשר לילדים  להשתלב במסגרות חינוכיות וקהילתיות באופן מהנה וטבעי דרך חיבור לטבע." +
                        "באמצעות העברת תכנים סביבתיים וחיבור לעצים וצמחיה סביבנו תוך לימוד ויצרית סדנאות ממגוון התחומים",
                        icon: garden_eds2
    },
    {
        title: "הסיפור שלנו", text: "  העמותה שלנו שואפת לשפר את איכות החיים באמצעות פעילויות קהילתיות ייחודיות." +
                        "אנו מקדמים חינוך, תרבות וסיוע לכלל האוכלוסייה.", icon: oliveTree
    },
]




const title = " מי אנחנו";
const text = "העמותה שלנו שואפת לשפר את איכות החיים באמצעות פעילויות קהילתיות ייחודיות."
    + " אנו מקדמים חינוך, תרבות וסיוע לכלל האוכלוסייה."

function About() {
    return (
        <div className='blur-to-clear title-conainer'>
            <h2>עלינו</h2>

            <div className="">
                <p className="title-p">ביער האפשרויות תוכלו למצוא  מגוון סדנאות ופעילויות תוך השתלבות בחיק הטבע.
                    .אנו דוגלים בפעילות אקולוגית, חינוכה והפצתה,
                    תוך חשיפה לגידול מודרני של צמחיה, ירק, ומעופפים (דבורים)
                    במתחם ניתן לקבל קורסים וסדנאות חינוך לילדים, וטיפול ושיקום לכל מגוון הגילאים
                </p>

            </div>

            <ImageSlider images={images} />

            {imageTexts.map((section, index) =>(
                    <ImageText title={section.title} text={section.text} icon={section.icon} />
                ))}
                
            <GoogleMap />

        </div>
    );
}

export default About;