import React from "react";
import "./join.css"; // CSS for styling
import peaceHands from "./peace-cooperate-together-svgrepo-com.svg"; // Add your logo file

const Join = () => {
  return (
    <div className="join-container">
      <div className="join-content">
        <img src={peaceHands} alt="עמותתנו" className="join-logo" />
        <h2>הצטרפות לעמותה</h2>
        <p className="join-description">
          חברי העמותה נהנים ממגוון הטבות והנחות
        </p>
        <ul className="join-benefits">
          <li>סיורים חינם לאורך כל השנה</li>
          <li>עדיפות בהרשמה מראש לקורסים והנחה 50%</li>
          <li>עדיפות בהרשמה מראש לסדנאות והנחה 50%</li>
          <li>כניסה חופשית למתחמי הספורט</li>
          <li>עדכונים והשתלבות בתכנון ועשייה של העמותה</li>
          <li>ועוד מגוון הטבות נוספות</li>
        </ul>
        <button className="join-button">אני רוצה להצטרף</button>
      </div>
    </div>
  );
};

export default Join;
