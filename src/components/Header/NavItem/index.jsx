import {Link} from "react-router-dom";
import "./style.css";

/**
 * NavItem component for the Header component
 *
 * @param content {string} - The content of the NavItem
 * @param icon {string} - The icon of the NavItem
 * @param to {string} - The path to the NavItem
 * @returns {JSX.Element}
 * @constructor
 */
const NavItem = ({content, icon, to}) => {
    return (
        <div className={"navItem"}>
            <i className={icon}></i>
            <Link to={to}>{content}</Link>
        </div>
    );
}

export default NavItem;