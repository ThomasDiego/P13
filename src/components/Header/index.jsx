import "./style.css"
import Logo from "../../assets/logo.png"
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

//adding Redux
import { useSelector, useDispatch} from "react-redux";
const Header = () => {
    const user = useSelector((state) => state.user)
    return (
        <header>
            <Link to={"/"} className={'logo'}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                {!user.token ?
                        <NavItem to={"/login"} content={"Sign In"} icon={"fa fa-user-circle"}/>
                    :
                    <>
                        <NavItem to={"/profile"} content={user.firstName} icon={"fa fa-user-circle"}/>
                        <NavItem to={"/"} content={"Sign Out"} action={"signOut"} icon={"fa-solid fa-right-from-bracket"}/>
                    </>

                }
            </nav>
        </header>
    )
}

export default Header