import './menuItem.css';
const MenuItem = (props) => {
    return (
        <span className="menu-item">
            <span className="arrow">▼</span>
            <span className='span-text'>{props.text}</span>

        </span>
    )
}

export default MenuItem;