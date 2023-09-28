import "./style.css"
import Button from "../Form/Button/index.jsx";
export const AccountBalance = ({title, amount, accountId }) => {
    return (
        <div className={"accountBalance"}>
            <div className={"leftDetails"}>
                <div className={"accountTitle"}>Argent bank {title}</div>
                <div className={"accountAmount"}>${amount}</div>
                <div className={"accountAmountDescription"}>Available Balance</div>
            </div>
            <div className={"rightDetails"}>
                <Button width={"fit-content"} content={"View transactions"} handleButtonCallback={(e) =>{console.log("Button AccountBalance Clicked")}}/>
            </div>
        </div>
    )
}