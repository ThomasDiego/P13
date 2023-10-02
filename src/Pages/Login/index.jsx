import "./style.css";
import Button from "../../components/Form/Button";
import {InputText} from "../../components/Form/InputText";
import {CheckboxInput} from "../../components/Form/InputCheckbox";
import {useState} from "react";
import { LoginApi, getUserDatas} from "../../api"

//adding Redux
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    //adding redux
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState("")

    const handleButtonCallback = async () => {
        try{
            const response = await LoginApi({email, password, rememberMe})
            if(response.status === 200) {
                const userDatas = await getUserDatas(response.body.token)
                if(userDatas.status === 200) {
                    dispatch({type: "user/updateUser", payload: {userDatas: {...userDatas.body, token: response.body.token}}})
                    navigate("/profile")
                }else{
                    throw new Error(userDatas.message)
                }
                //navigate("/profile")
            }else if(response.status === 400) {
                throw new Error(response.message);
            }
        }catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    return (
        <div className={"login"}>
            <div className="loginForm">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="loginFormTitle">Sign In</h1>
                <InputText type={"text"} label={"Username"} name={"username"} handleCallback={(dataCallback) => {setEmail(dataCallback.value); setError("")}}/>
                <InputText type={"password"} label={"Password"} name={"password"} handleCallback={(dataCallback) => {setPassword(dataCallback.value); setError("")}} />
                <CheckboxInput label={"Remember me"} name={"rememberMe"} handleCheckboxCallback={(dataCallback) => {setRememberMe(dataCallback.value); setError("")}}/>
                {error && <div className="errorLogin">{error}</div>}
                <Button width={"100%"} content={"Sign In"} handleButtonCallback={handleButtonCallback}/>
            </div>
        </div>
    );
}

export default Login;