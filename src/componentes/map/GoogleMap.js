import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
    return (
        <div className="map-container">
            <h3> המיקום שלנו - יער האפשרויות פתח תקווה</h3>
            <iframe
                title="Google Map"
                className="google-map"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.117200576055!2d34.88774631513716!3d32.08411738111183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4e1b3ed897eb%3A0x3b14100f378c6797!2z15nXn9mXkNnXnV9X15Lg15w%20!5e0!3m2!1sen!2sil!4v1710198241031!5m2!1sen!2sil"
                // scr="https://www.google.com/maps/place/%D7%99%D7%A2%D7%A8+%D7%90%D7%A4%D7%A9%D7%A8%D7%95%D7%99%D7%95%D7%AA%E2%80%AD/@32.1147999,34.8867497,17z/data=!4m6!3m5!1s0x151d364ecef1128d:0x4eddfc81b64416e2!8m2!3d32.1147999!4d34.8890436!16s%2Fg%2F11c7sqkdg_?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.3147903335093!2d34.88674965030765!3d32.11479990354305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d364ecef1128d%3A0x4eddfc81b64416e2!2z15nXoteoINeQ16TXqdeo15XXmdeV16o!5e0!3m2!1sen!2sil!4v1742215876540!5m2!1sen!2sil" 

                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    );
};

export default GoogleMap;
