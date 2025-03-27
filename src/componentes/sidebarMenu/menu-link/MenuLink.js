import { Link, useLocation } from "react-router-dom";

const MenuLink = (props) => {
    return(
        <li className={props.location.pathname === `/${props.navto}` ? "active" : ""}
        onClick={(e) => props.menuSelection(e, `/${props.navto}`, props.isSub)}
        onTouchEnd={(e) => props.menuSelection(e, `/${props.navto}`, props.isSub)}
    >
        <Link >{props.text}</Link>
    </li>
    )

}
export default MenuLink;

