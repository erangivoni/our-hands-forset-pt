import "./imageText.css";
const ImageText = (props) => {
    return (
        <div className={`${props.size == "small" ?  "about-section-small" : "about-section"}` }>
            <div className={`${props.size == "small" ? "about-text-small": "about-text"}`}>
                <h3>{props.title}</h3>
                <p> {props.text}</p>

            </div>
            <div className={`${props.size == "small"? "small": "about-image"}`}>
                <img src={props.icon} alt="אודות העמותה" />
            </div>
        </div>
    )
}
export default ImageText;