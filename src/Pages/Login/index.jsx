import "./style.css";
import Button from "../../components/Form/Button";
import {InputText} from "../../components/Form/InputText";
import {CheckboxInput} from "../../components/Form/InputCheckbox";
import {useState} from "react";
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleButtonCallback = () => {
            console.log({username, password, rememberMe})
    }

    return (
        <div className={"login"}>
            <div className="loginForm">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="loginFormTitle">Sign In</h1>
                <InputText label={"Username"} name={"username"} handleCallback={(dataCallback) => {setUsername(dataCallback.value)}}/>
                <InputText label={"Password"} name={"password"} handleCallback={(dataCallback) => {setPassword(dataCallback.value)}} />
                <CheckboxInput label={"Remember me"} name={"rememberMe"} handleCheckboxCallback={(dataCallback) => {setRememberMe(dataCallback.value)}}/>
                <Button width={"100%"} content={"Sign In"} handleButtonCallback={handleButtonCallback}/>
            </div>
        </div>
    );
}

export default Login;