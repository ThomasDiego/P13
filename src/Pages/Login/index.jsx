import "./style.css";
import Button from "../../components/Form/Button/index.jsx";
const Login = () => {
    return (
        <div className={"login"}>
            <div className="loginForm">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="loginFormTitle">Sign In</h1>
                <div className="loginUsername loginLabelInput">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="loginPassword loginLabelInput">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className={"inputRememberMe"}>
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Button content={"Sign In"} />
            </div>
        </div>
    );
}

export default Login;