import "./style.css"
import Button from "../Form/Button/index.jsx";
function formateNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const AccountBalance = ({title, amount, accountId, transactionsCount }) => {
    return (
        <div className={"accountBalance"}>
            <div className={"leftDetails"}>
                <div className={"accountTitle"}>Argent bank {title} (x{transactionsCount.length})</div>
                <div className={"accountAmount"}>${formateNumber(amount)}</div>
                <div className={"accountAmountDescription"}>Available Balance</div>
            </div>
            <div className={"rightDetails"}>
                <Button width={"fit-content"} content={"View transactions"} handleButtonCallback={(e) =>{console.log(`Button view transactions of account id: ${accountId}`)}}/>
            </div>
        </div>
    )
}