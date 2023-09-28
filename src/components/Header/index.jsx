import "./style.css"
import Logo from "../../assets/logo.png"
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <Link to={"/"} className={'logo'}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                <NavItem to={"/sign-in"} content={"Sign In"} icon={"fa fa-user-circle"}/>
                <NavItem to={"/"} content={"Logout"} icon={"fa-solid fa-right-from-bracket"}/>
            </nav>
        </header>
    )
}

export default Header