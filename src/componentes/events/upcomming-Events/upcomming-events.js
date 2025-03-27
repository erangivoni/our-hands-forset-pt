import React from "react";
import "./UpcomingEvents.css";

const events = [
  {
    title: "קורס דבורים ומשמעותם",
    description: "הצטרפו לקורס מעמיק על עולמן של הדבורים, חשיבותן האקולוגית והשפעתן על הטבע והחקלאות.",
    icon: "🐝",
    link: "#",
  },
  {
    title: "סדנת גידול אקולוגי מודרני",
    description: "למדו כיצד לשלב שיטות חקלאות אקולוגיות בגידול מודרני וליצור סביבה ירוקה ובריאה יותר.",
    icon: "🌱",
    link: "#",
  },
  {
    title: "סדנת בניית שירותים אקולוגיים",
    description: "סדנה מעשית לבניית שירותים אקולוגיים – פתרון סביבתי וחדשני לשיפור הקיימות.",
    icon: "🚽",
    link: "#",
  },
  {
    title: "סיור היכרות ביער האפשרויות",
    description: "בואו להכיר את יער האפשרויות בסיור חווייתי בו נגלה את מגוון הפעילויות והסביבה הטבעית.",
    icon: "🌳",
    link: "#",
  },
  {
    title: "מפגש כלבים",
    description: "מפגש לכל אוהבי הכלבים – הזדמנות נהדרת לתת לחברים הפרוותיים לשחק ולהכיר חברים חדשים.",
    icon: "🐶",
    link: "#",
  },
  {
    title: "שבת עם ילדים",
    description: "שבת קסומה ביער – פעילויות יצירה, סיפורים ומשחקים בטבע לכל המשפחה.",
    icon: "👦",
    link: "#",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="events-container">
      <h2 className="events-title">אירועים קרובים</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-icon">{event.icon}</div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <a href={event.link} className="event-button">פרטים והרשמה </a>
          </div>
        ))}
      </div>
    </div>
  );
}
