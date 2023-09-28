import "./style.css";
import Button from "../../components/Form/Button/index.jsx";
import {AccountBalance} from "../../components/AccountBalance/index.jsx";
export const Dashboard = () => {
    return (
        <div className={"dashboard"}>
            <div className="dashboardContainer">
                <div className="dashboardTitle">
                    <h1>Welcome back<br/>Tony Jarvis!</h1>
                </div>
                <Button width={"fit-content"} content={"Edit name"} handleButtonCallback={(e) =>{console.log("Button Dashboard Clicked")}}/>
                <div className={"accountList"}>
                    <AccountBalance title={"Checking"} amount={"10000"}/>
                    <AccountBalance title={"Savings"} amount={"10"}/>
                    <AccountBalance title={"Credit Card"} amount={"1"}/>
                </div>
            </div>
        </div>
    )
}