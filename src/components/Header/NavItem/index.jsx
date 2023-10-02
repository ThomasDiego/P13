import {Link} from "react-router-dom";
import "./style.css";

import {useDispatch} from "react-redux";

/**
 * NavItem component for the Header component
 *
 * @param content {string} - The content of the NavItem
 * @param icon {string} - The icon of the NavItem
 * @param to {string} - The path to the NavItem
 * @param action {string} - The type of the NavItem
 * @returns {JSX.Element}
 * @constructor
 */
const NavItem = ({content, icon, to, action}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        if(action === "signOut") {
            dispatch({type: "user/logout"})
        }
    }
    return (
        <div className={"navItem"}>
            <i className={icon}></i>
            <Link onClick={handleClick} to={to}>{content}</Link>
        </div>
    );
}

export default NavItem;